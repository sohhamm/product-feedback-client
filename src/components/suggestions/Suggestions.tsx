import Btn from '../ui/Btn'
import SortMenu from '../ui/SortMenu'
import SuggestionCard from '../ui/SuggestionCard'
import EmptyState from '../ui/EmptyState'
import PlusIcon from '/public/assets/shared/icon-plus.svg'
import IllustrationIcon from '/public/assets/suggestions/icon-suggestions.svg'
import {useRouter} from 'next/router'
import {sorter} from '../../utils/utils'
import {Flex, Image, Text} from '@chakra-ui/react'
import {useUIStore} from '../../store/ui'
import {useMemo} from 'react'

interface SuggestionsProps {
  suggestions: any
  isMobile?: boolean
}

export default function Suggestions({suggestions, isMobile}: SuggestionsProps) {
  const activeSort = useUIStore(state => state.activeSort)
  const activeTag = useUIStore(state => state.activeTag)
  const router = useRouter()

  const filteredSuggestions = useMemo(
    () =>
      suggestions.filter((s: any) => {
        if (activeTag !== 'All' && s.category !== activeTag.toLowerCase())
          return false
        return true
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTag],
  )

  return (
    <Flex w="100%" flexDir={'column'}>
      {isMobile ? (
        <Flex
          pos="sticky"
          top={'71px'}
          justify={'space-between'}
          bg="navyBlue1.400"
          py="14px"
          px="16px"
          mx="-39px"
        >
          <Flex columnGap={'16px'} alignItems={'center'}>
            <SortMenu />
          </Flex>
          <Btn src={PlusIcon.src} onClick={() => router.push('/feedback-new')}>
            Add Feedback
          </Btn>
        </Flex>
      ) : (
        <Flex
          justify={'space-between'}
          h="72px"
          borderRadius={'10px'}
          bg="navyBlue1.400"
          py="14px"
          px="16px"
        >
          <Flex columnGap={'16px'} alignItems={'center'}>
            <Image
              src={IllustrationIcon.src}
              alt="illustration"
              h="24px"
              w="24px"
              ml="8px"
            />

            <Text fontWeight={'bold'} fontSize="18px" color="white">
              6 Suggestions
            </Text>
            <SortMenu />
          </Flex>
          <Btn src={PlusIcon.src} onClick={() => router.push('/feedback-new')}>
            Add Feedback
          </Btn>
        </Flex>
      )}

      {filteredSuggestions.length === 0 ? (
        <EmptyState />
      ) : (
        <Flex
          direction={'column'}
          rowGap={['16px', '20px']}
          mt="24px"
          w="100%"
          // mx={isMobile ? '-10px' : ''}
          overflowY={isMobile ? 'auto' : 'scroll'}
          position={isMobile ? 'static' : 'absolute'}
          top={isMobile ? '' : '8%'}
          bottom={isMobile ? '' : 0}
        >
          {filteredSuggestions
            .sort((el1: any, el2: any) => sorter(el1, el2, activeSort))
            .map((suggestion: any) => (
              <SuggestionCard suggestion={suggestion} key={suggestion.id} />
            ))}
        </Flex>
      )}
    </Flex>
  )
}

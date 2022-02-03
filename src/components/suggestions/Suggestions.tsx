import Btn from '../ui/Btn'
import SortMenu from '../ui/SortMenu'
import SuggestionCard from '../ui/SuggestionCard'
import PlusIcon from '../../../public/assets/shared/icon-plus.svg'
import IllustrationIcon from '../../../public/assets/suggestions/icon-suggestions.svg'
import {Flex, Image, Text} from '@chakra-ui/react'
import EmptyState from '../ui/EmptyState'
import {useRouter} from 'next/router'

interface SuggestionsProps {
  suggestions: any
}

export default function Suggestions({suggestions}: SuggestionsProps) {
  const router = useRouter()

  return (
    <Flex w="100%" flexDir={'column'}>
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
        <Btn
          src={PlusIcon.src}
          hoverColor="#C75AF6"
          onClick={() => router.push('/feedback-new')}
        >
          Add Feedback
        </Btn>
      </Flex>
      {suggestions.length === 0 ? (
        <EmptyState />
      ) : (
        <Flex
          direction={'column'}
          rowGap={'20px'}
          mt="24px"
          w="100%"
          overflowY={'scroll'}
          position="absolute"
          top={'8%'}
          bottom={0}
          // scrollBehavior={'smooth'}
          // overflowX={'hidden'}
        >
          {suggestions.map((suggestion: any) => (
            <SuggestionCard suggestion={suggestion} key={suggestion.id} />
          ))}
        </Flex>
      )}
    </Flex>
  )
}

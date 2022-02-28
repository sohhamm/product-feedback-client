import * as React from 'react'
import Upvotes from '@/components/ui/Upvotes'
import Tag from '@/components/ui/Tag'
import CommentsUI from '@/components/ui/CommentsUI'
import {useRouter} from 'next/router'
import {Flex, Heading, Text} from '@chakra-ui/react'

export default function SuggestionCard({
  suggestion,
  isViewOnly,
  isMobile,
}: {
  suggestion: any
  isViewOnly?: boolean
  isMobile?: boolean
}) {
  const [headingColor, setHeadingColor] = React.useState('navyBlue2.400')
  const router = useRouter()

  const handleGoToDetails = () => {
    router.push(`/feedback-details/${suggestion.id}`)
  }

  const handleUpvoteFeedback = (e: React.MouseEvent) => {
    e.stopPropagation()
    //todo upvote feature
  }

  if (isMobile)
    return (
      <Flex
        bg="white"
        w="100%"
        flexDir={'column'}
        p="25px"
        borderRadius={'10px'}
        onClick={isViewOnly ? () => {} : handleGoToDetails}
        _hover={{
          cursor: isViewOnly ? '' : 'pointer',
        }}
        onMouseEnter={() => setHeadingColor('darkBlue.400')}
        onMouseLeave={() => setHeadingColor('navyBlue2.400')}
      >
        <Flex direction={'column'} color="navyBlue2.400">
          <Heading
            as="h2"
            fontSize={'14px'}
            mb="4px"
            color={isViewOnly ? 'navyBlue2.400' : headingColor}
          >
            {suggestion.title}
          </Heading>
          <Text mb="8px" fontSize={'13px'} color="#647196">
            {suggestion.description}
          </Text>
          <Tag isViewOnly>{suggestion.category}</Tag>
        </Flex>

        <Flex justify={'space-between'} mt="16px">
          <Upvotes
            upvotes={suggestion.upvotes}
            onClick={handleUpvoteFeedback}
            onMouseEnter={() => setHeadingColor('navyBlue2.400')}
            onMouseLeave={() => setHeadingColor('darkBlue.400')}
            isRow
            isMobile
            iconProps={{
              mt: '2px',
              mr: '10px',
            }}
          />

          <CommentsUI noOfComments={suggestion.comments?.length ?? 0} />
        </Flex>
      </Flex>
    )

  return (
    <Flex
      bg="white"
      w="100%"
      justify={'space-between'}
      px="32px"
      py="28px"
      borderRadius={'10px'}
      onClick={isViewOnly ? () => {} : handleGoToDetails}
      _hover={{
        cursor: isViewOnly ? '' : 'pointer',
      }}
      onMouseEnter={() => setHeadingColor('darkBlue.400')}
      onMouseLeave={() => setHeadingColor('navyBlue2.400')}
    >
      <Flex align={'center'}>
        <Upvotes
          upvotes={suggestion.upvotes}
          onClick={handleUpvoteFeedback}
          onMouseEnter={() => setHeadingColor('navyBlue2.400')}
          onMouseLeave={() => setHeadingColor('darkBlue.400')}
        />

        <Flex direction={'column'} ml={['40px']} color="navyBlue2.400">
          <Heading
            as="h2"
            fontSize={'18px'}
            mb="4px"
            color={isViewOnly ? 'navyBlue2.400' : headingColor}
          >
            {suggestion.title}
          </Heading>
          <Text mb="12px" fontSize={'16px'} color="#647196">
            {suggestion.description}
          </Text>
          <Tag isViewOnly>{suggestion.category}</Tag>
        </Flex>
      </Flex>

      <CommentsUI noOfComments={suggestion.comments?.length ?? 0} />
    </Flex>
  )
}

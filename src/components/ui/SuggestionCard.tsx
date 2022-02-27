import * as React from 'react'
import Upvotes from '@/components/ui/Upvotes'
import Tag from '@/components/ui/Tag'
import CommentsUI from '@/components/ui/CommentsUI'
import {useRouter} from 'next/router'
import {Flex, Heading, Image, Text} from '@chakra-ui/react'

export default function SuggestionCard({
  suggestion,
  isViewOnly,
}: {
  suggestion: any
  isViewOnly?: boolean
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

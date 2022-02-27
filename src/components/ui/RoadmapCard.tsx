import * as React from 'react'
import {TStatus} from '@/types/types'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import {getColor} from '@/utils/utils'
import Status from './Status'
import Tag from './Tag'
import Upvotes from './Upvotes'
import CommentsUI from './CommentsUI'
import Link from 'next/link'

interface RoadmapCardProps {
  status: TStatus
  request: any
}

export default function RoadmapCard({status, request}: RoadmapCardProps) {
  const color = React.useMemo(() => getColor(status), [status])

  const handleUpvoteRequest = () => {}

  return (
    <Box
      borderRadius="5px"
      borderTop={`6px solid`}
      borderTopColor={color}
      p={['20px', '20px', '32px']}
      pt="25px"
      bg="white"
    >
      <Status color={color} text={status} />
      <Link href={`/feedback-details/${request.id}`} passHref>
        <Heading
          as="h4"
          fontSize={['12px', '13px', '18px']}
          color="navyBlue2.400"
          mt="8px"
          _hover={{color: 'darkBlue.400', cursor: 'pointer'}}
        >
          {request.title}
        </Heading>
      </Link>
      <Text
        as="h4"
        fontSize={['12px', '13px', '16px']}
        color="darkGray.400"
        mt="4px"
        mb="16px"
      >
        {request.description}
      </Text>
      <Tag isViewOnly>{request.category}</Tag>

      <Flex mt="16px" justify={'space-between'}>
        <Upvotes
          upvotes={request.upvotes}
          onClick={handleUpvoteRequest}
          isRow
          iconProps={{
            mt: '6px',
            mr: '10px',
          }}
        />

        <CommentsUI noOfComments={request.comments?.length ?? 0} />
      </Flex>
    </Box>
  )
}

import * as React from 'react'
import {TStatus} from '@/types/types'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import {getColor} from '@/utils/utils'
import Status from './Status'
import Tag from './Tag'
import Upvotes from './Upvotes'
import CommentsUI from './CommentsUI'

interface RoadmapCardProps {
  status: TStatus
  request: any
}

export default function RoadmapCard({status, request}: RoadmapCardProps) {
  const color = React.useMemo(() => getColor(status), [status])

  console.log(request)

  const handleUpvoteRequest = () => {}

  return (
    <Box
      borderRadius="5px"
      borderTop={`6px solid`}
      borderTopColor={color}
      p="32px"
      pt="25px"
      bg="white"
    >
      <Status color={color} text={status} />
      <Heading as="h4" fontSize={['18px']} color="navyBlue2.400" mt="8px">
        {request.title}
      </Heading>
      <Text as="h4" fontSize={['16px']} color="darkGray.400" mt="4px" mb="16px">
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

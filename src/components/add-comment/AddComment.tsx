import * as React from 'react'
import {Box, Flex, Heading, Text, Textarea} from '@chakra-ui/react'
import Btn from '../ui/Btn'

const MAX_CHARS = 250

export default function AddComment() {
  const [comment, setComment] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (comment.length > 250) {
      return
      // todo implement character limit
    }
    setComment(e.target.value)
  }

  const handlePostComment = () => {}

  return (
    <Box bg="white" borderRadius={'10px'} px="32px" pt="24px" pb="48px">
      <Heading fontSize={['18px']} color="navyBlue2.400">
        Add Comment
      </Heading>

      <Textarea
        value={comment}
        onChange={handleChange}
        bg="#F7F8FD"
        borderRadius="5px"
        mt={['24px']}
        _placeholder={{
          color: '#8C92B3',
          padding: '5px 8px',
        }}
        placeholder="Type your comment here..."
        focusBorderColor="darkBlue.400"
      />
      <Flex justify={'space-between'} align={'center'} mt="16px">
        <Text color="#647196" fontSize={['15px']}>
          {MAX_CHARS - comment.length} characters left
        </Text>
        <Btn onClick={handlePostComment} hoverColor="#C75AF6">
          Post Comment
        </Btn>
      </Flex>
    </Box>
  )
}

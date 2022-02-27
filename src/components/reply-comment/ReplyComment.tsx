import * as React from 'react'
import Btn from '../ui/Btn'
import {Flex, Textarea} from '@chakra-ui/react'

interface ReplyCommentProps {
  commentID: number
  isReply?: boolean
}
const MAX_CHARS = 250

export default function ReplyComment({commentID, isReply}: ReplyCommentProps) {
  const [comment, setComment] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (comment.length > 250) {
      return
      // todo implement character limit
    }
    setComment(e.target.value)
  }

  const handleReplyComment = () => {}

  return (
    <Flex mt={['24px']} pl={['90px']}>
      <Textarea
        value={comment}
        onChange={handleChange}
        bg="#F7F8FD"
        borderRadius="5px"
        _placeholder={{
          color: '#8C92B3',
          padding: '5px 8px',
        }}
        placeholder="Type your comment here..."
        focusBorderColor="darkBlue.400"
        mr={'16px'}
      />

      <Btn onClick={handleReplyComment} hoverColor="#C75AF6">
        Post Reply
      </Btn>
    </Flex>
  )
}

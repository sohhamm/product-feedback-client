import {Flex, Image, Text} from '@chakra-ui/react'
import CommentIcon from '/public/assets/shared/icon-comments.svg'

export default function CommentsUI({noOfComments}: {noOfComments: number}) {
  return (
    <Flex align={'center'}>
      <Image src={CommentIcon.src} alt="comments" w="18px" h="16px" mr="8px" />
      <Text
        fontSize={'16px'}
        fontWeight={'bold'}
        color={'navyBlue2.400'}
        opacity={!noOfComments ? 0.5 : 1}
      >
        {noOfComments}
      </Text>
    </Flex>
  )
}

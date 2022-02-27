import * as React from 'react'
import Image from 'next/image'
import ReplyComment from '../reply-comment/ReplyComment'
import Btn from '@/components/ui/Btn'
import styles from './comments.module.css'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'

export default function Comments({
  comments,
  isMobile,
}: {
  comments: any
  isMobile?: boolean
}) {
  const [replyIDs, setReplyIDs] = React.useState<number[]>([])

  const totalComments = React.useMemo(() => {
    return (
      comments.length +
      comments.reduce((acc: number, comment: any) => {
        const replies = comment.replies?.length ?? 0
        console.log(replies)
        return (acc += replies)
      }, 0)
    )
  }, [comments])

  const handleReply = (id: number) => {
    setReplyIDs(oldState => {
      if (oldState.includes(id)) return oldState
      const ids = [...oldState, id]
      return ids
    })
  }

  return (
    <Box
      bg="white"
      borderRadius={'10px'}
      px={['24px', '32px']}
      pt="24px"
      pb="48px"
    >
      <Heading
        as="h2"
        fontSize={['18px']}
        color="navyBlue2.400"
        mb={['24px', '28px']}
      >
        {totalComments} Comments
      </Heading>

      {comments.map((comment: any, idx: number) => (
        <Box
          key={comment.id}
          mb="32px"
          borderTop={idx !== 0 ? '2px rgba(100,113,150,0.1) solid' : ''}
          pt={idx !== 0 ? '32px' : ''}
        >
          <Flex
            justify={'space-between'}
            mb={['16px', '17px']}
            align={'center'}
          >
            <Flex>
              <Image
                src={comment.user.image.slice(1)}
                alt="user"
                width={'40px'}
                height={'40px'}
                className={styles.user}
              />

              <Box mx={['16px', '32px']}>
                <Heading
                  as="h4"
                  fontSize={['13px', '14px']}
                  color="navyBlue2.400"
                >
                  {comment.user.name}
                </Heading>
                <Text fontSize={['13px', '14px']} color="#647196">
                  @{comment.user.username}
                </Text>
              </Box>
            </Flex>

            <Btn
              variant="link"
              color="darkBlue.400"
              props={{fontSize: '13px', fontWeight: 600, w: '60px'}}
              onClick={() => handleReply(comment.id)}
              isMobile={isMobile}
            >
              Reply
            </Btn>
          </Flex>

          <Box
            borderLeft={
              isMobile
                ? ''
                : comment.replies?.length
                ? '2px rgba(100,113,150,0.1) solid'
                : ''
            }
            ml={['0px', '20px']}
          >
            <Text
              fontSize={['13px', '15px']}
              color="darkGray.400"
              pl={['0px', '52px']}
            >
              {comment.content}
            </Text>

            <Box borderLeft={isMobile ? '2px rgba(100,113,150,0.1) solid' : ''}>
              {comment.replies?.map((reply: any) => (
                <Box
                  key={reply.user.username}
                  mt={['32px']}
                  pl={['23px', '24px']}
                >
                  <Flex
                    justify={'space-between'}
                    mb={['16px', '17px']}
                    align={'center'}
                  >
                    <Flex>
                      <Image
                        src={reply.user.image.slice(1)}
                        alt="user"
                        width={'40px'}
                        height={'40px'}
                        className={styles.user}
                      />

                      <Box mx={['16px', '32px']}>
                        <Heading
                          as="h4"
                          fontSize={['13px', '14px']}
                          color="navyBlue2.400"
                        >
                          {reply.user.name}
                        </Heading>
                        <Text fontSize={['13px', '14px']} color="#647196">
                          @{reply.user.username}
                        </Text>
                      </Box>
                    </Flex>

                    <Btn
                      variant="link"
                      color="darkBlue.400"
                      props={{fontSize: '13px', fontWeight: 600, w: '60px'}}
                      onClick={() => handleReply(comment.id)}
                      isMobile={isMobile}
                    >
                      Reply
                    </Btn>
                  </Flex>

                  <Text
                    as="div"
                    fontSize={['13px', '15px']}
                    color="darkGray.400"
                    pl={['0px', '70px']}
                  >
                    <Text
                      display="inline"
                      color="purple.400"
                      fontWeight={'bold'}
                    >
                      @{reply.replyingTo}
                    </Text>{' '}
                    {reply.content}
                  </Text>
                </Box>
              ))}
            </Box>

            {replyIDs.includes(comment.id) && (
              <ReplyComment commentID={comment.id} isMobile={isMobile} />
            )}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

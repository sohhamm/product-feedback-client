import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Btn from '../ui/Btn'
import styles from './comments.module.css'

export default function Comments({comments}: {comments: any}) {
  console.log(comments)
  return (
    <Box bg="white" borderRadius={'10px'} px="32px" pt="24px" pb="48px">
      <Heading as="h2" fontSize={['18px']} color="navyBlue2.400" mb={'28px'}>
        {comments.length} Comments
      </Heading>

      {comments.map((comment: any, idx: number) => (
        <Box
          key={comment.id}
          mb="32px"
          borderTop={idx !== 0 ? '2px rgba(100,113,150,0.1) solid' : ''}
          pt={idx !== 0 ? '32px' : ''}
        >
          <Flex justify={'space-between'} mb="17px" align={'center'}>
            <Flex>
              <Image
                src={comment.user.image.slice(1)}
                alt="user"
                width={'40px'}
                height={'40px'}
                className={styles.user}
              />

              <Box mx="32px">
                <Heading as="h4" fontSize={'14px'} color="navyBlue2.400">
                  {comment.user.name}
                </Heading>
                <Text fontSize={'14px'} color="#647196">
                  @{comment.user.username}
                </Text>
              </Box>
            </Flex>

            <Btn
              variant="link"
              color="darkBlue.400"
              props={{fontSize: '13px', fontWeight: 600, w: '60px'}}
            >
              Reply
            </Btn>
          </Flex>

          <Box
            borderLeft={
              comment.replies?.length ? '2px rgba(100,113,150,0.1) solid' : ''
            }
            ml="20px"
          >
            <Text fontSize={['15px']} color="darkGray.400" pl={['52px']}>
              {comment.content}
            </Text>

            {comment.replies?.map((reply: any) => (
              <Box key={reply.user.username} mt={['32px']} pl={['24px']}>
                <Flex justify={'space-between'} mb="17px" align={'center'}>
                  <Flex>
                    <Image
                      src={reply.user.image.slice(1)}
                      alt="user"
                      width={'40px'}
                      height={'40px'}
                      className={styles.user}
                    />

                    <Box mx="32px">
                      <Heading as="h4" fontSize={'14px'} color="navyBlue2.400">
                        {reply.user.name}
                      </Heading>
                      <Text fontSize={'14px'} color="#647196">
                        @{reply.user.username}
                      </Text>
                    </Box>
                  </Flex>

                  <Btn
                    variant="link"
                    color="darkBlue.400"
                    props={{fontSize: '13px', fontWeight: 600, w: '60px'}}
                  >
                    Reply
                  </Btn>
                </Flex>

                <Text fontSize={['15px']} color="darkGray.400" pl={['70px']}>
                  <Text display="inline" color="purple.400" fontWeight={'bold'}>
                    @{reply.replyingTo}
                  </Text>{' '}
                  {reply.content}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

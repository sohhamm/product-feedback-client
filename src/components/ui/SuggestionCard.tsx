import {Flex, Heading, Image, Text} from '@chakra-ui/react'
import React from 'react'
import Upvotes from './Upvotes'
import CommentIcon from '../../../public/assets/shared/icon-comments.svg'
import Tag from './Tag'

export default function SuggestionCard({suggestion}: {suggestion: any}) {
  return (
    <Flex
      bg="white"
      w="100%"
      justify={'space-between'}
      px="32px"
      py="28px"
      borderRadius={'10px'}
    >
      <Flex align={'center'}>
        <Upvotes upvotes={suggestion.upvotes} />

        <Flex direction={'column'} ml={['40px']} color="navyBlue2.400">
          <Heading as="h2" fontSize={'18px'} mb="4px">
            {suggestion.title}
          </Heading>
          <Text mb="12px" fontWeight={'16px'} color="#647196">
            {suggestion.description}
          </Text>
          <Tag isViewOnly>{suggestion.category}</Tag>
        </Flex>
      </Flex>

      <Flex align={'center'}>
        <Image
          src={CommentIcon.src}
          alt="comments"
          w="18px"
          h="16px"
          mr="8px"
        />
        <Text fontSize={'16px'} fontWeight={'bold'}>
          {suggestion.comments?.length}
        </Text>
      </Flex>
    </Flex>
  )
}

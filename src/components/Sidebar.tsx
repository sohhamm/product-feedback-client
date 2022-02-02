import * as React from 'react'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import {allTags} from '../constants/contants'
import Tag from './ui/Tag'

export default function Sidebar() {
  return (
    <Flex flexDir="column" rowGap={'24px'}>
      <Flex
        flexDir="column"
        w="255px"
        h="137px"
        borderRadius="10px"
        background={bgGradient}
        p="24px"
        justify={'flex-end'}
      >
        <Heading fontSize={['20px']} color="white">
          Frontend Mentor
        </Heading>
        <Text color="white" opacity={0.75}>
          Feedback Board
        </Text>
      </Flex>
      <Flex
        alignItems={'center'}
        flexWrap={'wrap'}
        gap="14px"
        w="255px"
        borderRadius="10px"
        p="24px"
        bg="white"
      >
        {allTags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Flex>
      <Box w="255px" h="137px" borderRadius="10px" px="24px"></Box>
    </Flex>
  )
}

const bgGradient =
  'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)'

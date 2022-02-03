import * as React from 'react'
import {Box, chakra, Flex, Heading, Text} from '@chakra-ui/react'
import {allTags} from '../constants/constants'
import Tag from './ui/Tag'
import Link from 'next/link'

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
      <Box w="255px" borderRadius="10px" p={['24px']} bg="white">
        <Flex justify="space-between" mb="24px">
          <Heading fontSize={['20px']} color="navyBlue2" fontWeight={'bold'}>
            Roadmap
          </Heading>
          <Link href="/roadmap" passHref>
            <Text
              color="darkBlue"
              textDecor={'underline'}
              fontWeight={'semibold'}
              cursor={'pointer'}
            >
              View
            </Text>
          </Link>
        </Flex>

        <Flex justify="space-between" mb="8px" fontSize={['16px']}>
          <Flex align={'center'}>
            <Box
              as="span"
              borderRadius={'60%'}
              w="8px"
              h="8px"
              bg="#F49F85"
              mr="16px"
            />
            <Text color="darkGray.400">Planned</Text>
          </Flex>
          <Text color="darkGray.400" fontWeight={'bold'}>
            2
          </Text>
        </Flex>

        <Flex justify="space-between" mb="8px" fontSize={['16px']}>
          <Flex align={'center'}>
            <Box
              as="span"
              borderRadius={'60%'}
              w="8px"
              h="8px"
              bg="#AD1FEA"
              mr="16px"
            />
            <Text color="darkGray.400">In-progress</Text>
          </Flex>
          <Text color="darkGray.400" fontWeight={'bold'}>
            3
          </Text>
        </Flex>

        <Flex justify="space-between" mb="8px" fontSize={['16px']}>
          <Flex align={'center'}>
            <Box
              as="span"
              borderRadius={'60%'}
              w="8px"
              h="8px"
              bg="#62BCFA"
              mr="16px"
            />
            <Text color="darkGray.400">Live</Text>
          </Flex>
          <Text color="darkGray.400" fontWeight={'bold'}>
            1
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

const bgGradient =
  'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)'

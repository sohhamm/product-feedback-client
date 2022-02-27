import * as React from 'react'
import Link from 'next/link'
import Tag from './ui/Tag'
import Status from './ui/Status'
import {allTags} from '../constants/constants'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'

export default function Sidebar() {
  return (
    <Flex flexDir={['row', 'row', 'column']} rowGap={'24px'} columnGap="10px">
      <Flex
        flexDir="column"
        w="255px"
        h={['100%', '195px', '137px']}
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
        columnGap={['8px', '8px', '14px']}
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
          <Heading
            fontSize={['18px', '18px', '20px']}
            color="navyBlue2"
            fontWeight={'bold'}
          >
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
          <Status color="#F49F85" text="Planned" isHomePage />
          <Text color="darkGray.400" fontWeight={'bold'}>
            2
          </Text>
        </Flex>

        <Flex justify="space-between" mb="8px" fontSize={['16px']}>
          <Status color="#AD1FEA" text="In-progress" isHomePage />
          <Text color="darkGray.400" fontWeight={'bold'}>
            3
          </Text>
        </Flex>

        <Flex justify="space-between" mb="8px" fontSize={['16px']}>
          <Status color="#62BCFA" text="Live" isHomePage />
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

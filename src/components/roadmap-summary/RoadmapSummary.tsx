import Link from 'next/link'
import Status from '../ui/Status'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import {roadmapGroup} from '@/constants/constants'

export default function RoadmapSummary() {
  return (
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

      {roadmapGroup.map(roadmap => (
        <Flex
          justify="space-between"
          mb="8px"
          fontSize={['16px']}
          key={roadmap.value}
        >
          <Status color={roadmap.color} text={roadmap.text} isHomePage />
          <Text color="darkGray.400" fontWeight={'bold'}>
            {roadmap.value}
          </Text>
        </Flex>
      ))}
    </Box>
  )
}

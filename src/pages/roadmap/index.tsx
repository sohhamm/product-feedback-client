import PlusIcon from '/public/assets/shared/icon-plus.svg'
import LeftIcon from '/public/assets/shared/icon-arrow-left.svg'
import {Box, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import Btn from '@/components/ui/Btn'
import {getFeedbacks} from '@/service/feedback'
import {GetServerSideProps} from 'next/types'
import RoadmapCard from '@/components/ui/RoadmapCard'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getFeedbacks()
  const data = JSON.parse(JSON.stringify(res))
  const planned = data.productRequests.filter(
    (requests: any) => requests.status === 'planned',
  )
  const inProgress = data.productRequests.filter(
    (requests: any) => requests.status === 'in-progress',
  )
  const live = data.productRequests.filter(
    (requests: any) => requests.status === 'live',
  )
  return {
    props: {planned, inProgress, live},
  }
}

interface RoadmapProps {
  planned: any
  inProgress: any
  live: any
}

export default function Roadmap({planned, inProgress, live}: RoadmapProps) {
  const router = useRouter()
  return (
    <Box>
      <Flex
        justify={'space-between'}
        borderRadius={'10px'}
        bg="navyBlue1.400"
        py="20px"
        px="32px"
        align="center"
      >
        <Box>
          <Btn
            src={LeftIcon.src}
            variant="link"
            color="white"
            onClick={() => router.push('/')}
            props={{w: 'auto'}}
            iconProps={{mr: '15px', color: 'white'}}
          >
            Go Back
          </Btn>
          <Heading fontSize={'24px'} color="white">
            Roadmap
          </Heading>
        </Box>

        <Btn
          src={PlusIcon.src}
          onClick={() => router.push('/feedback-new')}
          hoverColor="#C75AF6"
        >
          Add Feedback
        </Btn>
      </Flex>

      <SimpleGrid
        as="main"
        templateColumns={'repeat(3,1fr)'}
        gap="30px"
        mt="48px"
      >
        <Box>
          <Heading as="h3" color="navyBlue2.400" fontSize={['18px']} mb="4px">
            Planned ({planned.length})
          </Heading>
          <Text fontSize={['16px']} mb="32px" color="darkGray.400">
            Ideas prioritized for research
          </Text>

          <Flex direction={'column'} rowGap="24px">
            {planned.map((request: any) => (
              <RoadmapCard
                status={request.status}
                key={request.id}
                request={request}
              />
            ))}
          </Flex>
        </Box>
        <Box>
          <Heading as="h3" color="navyBlue2.400" fontSize={['18px']} mb="4px">
            In-progress ({inProgress.length})
          </Heading>
          <Text fontSize={['16px']} mb="32px" color="darkGray.400">
            Currently being developed
          </Text>

          <Flex direction={'column'} rowGap="24px">
            {inProgress.map((request: any) => (
              <RoadmapCard
                status={request.status}
                key={request.id}
                request={request}
              />
            ))}
          </Flex>
        </Box>

        <Box>
          <Heading as="h3" color="navyBlue2.400" fontSize={['18px']} mb="4px">
            Live ({live.length})
          </Heading>
          <Text fontSize={['16px']} mb="32px" color="darkGray.400">
            Released Features
          </Text>

          <Flex direction={'column'} rowGap="24px">
            {live.map((request: any) => (
              <RoadmapCard
                status={request.status}
                key={request.id}
                request={request}
              />
            ))}
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

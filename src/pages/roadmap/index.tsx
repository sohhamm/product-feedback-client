import * as React from 'react'
import PlusIcon from '/public/assets/shared/icon-plus.svg'
import LeftIcon from '/public/assets/shared/icon-arrow-left.svg'
import Btn from '@/components/ui/Btn'
import RoadmapCard from '@/components/ui/RoadmapCard'
import {useRouter} from 'next/router'
import {GetServerSideProps} from 'next/types'
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import {getFeedbacks} from '@/service/feedback'
import {useMediaQuerySSR} from '@/hooks/media-query-ssr'

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
  const [tabIndex, setTabIndex] = React.useState(0)
  const router = useRouter()
  const isMobile = useMediaQuerySSR(480)
  const isTablet = useMediaQuerySSR(767)
  const isMax = useMediaQuerySSR(4000)

  const didMediaQueryResolve = isMobile || isTablet || isMax

  if (!didMediaQueryResolve)
    return (
      <Flex h="70vh" justify={'center'} align="center">
        <Spinner color="pink" size="xl" thickness="4px" />
      </Flex>
    )

  return (
    <Box mt={['-94px', '0px']}>
      {isMobile ? (
        <Flex
          justify={'space-between'}
          bg="navyBlue1.400"
          align="center"
          pos="sticky"
          top={0}
          py="26px"
          px="24px"
          mx="-24px"
        >
          <Box>
            <Btn
              src={LeftIcon.src}
              variant="link"
              color="white"
              onClick={() => router.push('/')}
              props={{w: 'auto'}}
              iconProps={{mr: '15px', color: 'white'}}
              isMobile
            >
              Go Back
            </Btn>
            <Heading fontSize={['18px', '24px']} color="white">
              Roadmap
            </Heading>
          </Box>

          <Btn
            src={PlusIcon.src}
            onClick={() => router.push('/feedback-new')}
            hoverColor="#C75AF6"
            isMobile
          >
            Add Feedback
          </Btn>
        </Flex>
      ) : (
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
      )}

      {isMobile ? (
        <Tabs
          isFitted
          mx="-24px"
          onChange={index => setTabIndex(index)}
          colorScheme="purple"
        >
          <TabList
            pos="sticky"
            top="119px"
            fontSize={'13px'}
            zIndex={1}
            bg="#F2F2F2"
          >
            <Tab
              fontSize={'13px'}
              fontWeight={700}
              h="60px"
              color="navyBlue1.400"
              opacity={tabIndex === 0 ? 1 : 0.4}
            >
              Planned (2)
            </Tab>
            <Tab
              fontSize={'13px'}
              fontWeight={700}
              h="60px"
              color="navyBlue1.400"
              opacity={tabIndex === 1 ? 1 : 0.4}
            >
              In-Progress (3)
            </Tab>
            <Tab
              fontSize={'13px'}
              fontWeight={700}
              h="60px"
              color="navyBlue1.400"
              opacity={tabIndex === 2 ? 1 : 0.4}
            >
              Live (1)
            </Tab>
          </TabList>

          <TabPanels px="12px">
            <TabPanel>
              <Box>
                <Heading
                  as="h3"
                  color="navyBlue2.400"
                  fontSize={['18px', '14px', '18px']}
                  mb="4px"
                >
                  Planned ({planned.length})
                </Heading>
                <Text
                  fontSize={['14px', '14px', '16px']}
                  mb={['24px', '24px', '32px']}
                  color="darkGray.400"
                >
                  Ideas prioritized for research
                </Text>

                <Flex direction={'column'} rowGap="24px">
                  {planned.map((request: any) => (
                    <RoadmapCard
                      status={request.status}
                      key={request.id}
                      request={request}
                      isMobile
                    />
                  ))}
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Heading
                  as="h3"
                  color="navyBlue2.400"
                  fontSize={['18px', '14px', '18px']}
                  mb="4px"
                >
                  In-progress ({inProgress.length})
                </Heading>
                <Text
                  fontSize={['14px', '14px', '16px']}
                  mb={['24px', '24px', '32px']}
                  color="darkGray.400"
                >
                  Currently being developed
                </Text>

                <Flex direction={'column'} rowGap="24px">
                  {inProgress.map((request: any) => (
                    <RoadmapCard
                      status={request.status}
                      key={request.id}
                      request={request}
                      isMobile
                    />
                  ))}
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Heading
                  as="h3"
                  color="navyBlue2.400"
                  fontSize={['18px', '14px', '18px']}
                  mb="4px"
                >
                  Live ({live.length})
                </Heading>
                <Text
                  fontSize={['14px', '14px', '16px']}
                  mb={['24px', '24px', '32px']}
                  color="darkGray.400"
                >
                  Released Features
                </Text>

                <Flex direction={'column'} rowGap={['16px', '16px', '24px']}>
                  {live.map((request: any) => (
                    <RoadmapCard
                      status={request.status}
                      key={request.id}
                      request={request}
                      isMobile
                    />
                  ))}
                </Flex>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <SimpleGrid
          as="main"
          templateColumns={'repeat(3,1fr)'}
          gap={['10px', '10px', '30px']}
          mt={['32px', '32px', '48px']}
        >
          <Box>
            <Heading
              as="h3"
              color="navyBlue2.400"
              fontSize={['14px', '14px', '18px']}
              mb="4px"
            >
              Planned ({planned.length})
            </Heading>
            <Text
              fontSize={['14px', '14px', '16px']}
              mb={['24px', '24px', '32px']}
              color="darkGray.400"
            >
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
            <Heading
              as="h3"
              color="navyBlue2.400"
              fontSize={['14px', '14px', '18px']}
              mb="4px"
            >
              In-progress ({inProgress.length})
            </Heading>
            <Text
              fontSize={['14px', '14px', '16px']}
              mb={['24px', '24px', '32px']}
              color="darkGray.400"
            >
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
            <Heading
              as="h3"
              color="navyBlue2.400"
              fontSize={['14px', '14px', '18px']}
              mb="4px"
            >
              Live ({live.length})
            </Heading>
            <Text
              fontSize={['14px', '14px', '16px']}
              mb={['24px', '24px', '32px']}
              color="darkGray.400"
            >
              Released Features
            </Text>

            <Flex direction={'column'} rowGap={['16px', '16px', '24px']}>
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
      )}
    </Box>
  )
}

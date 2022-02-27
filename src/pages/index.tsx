import MobileHeader from '@/components/mobile/MobileHeader'
import {Box, Flex, Grid, Text, useMediaQuery} from '@chakra-ui/react'
import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Suggestions from '../components/suggestions/Suggestions'
import {getFeedbacks} from '../service/feedback'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getFeedbacks()
  const data = JSON.parse(JSON.stringify(res))
  return {
    props: {suggestions: data.productRequests, data: data},
  }
}

const Home = ({suggestions, data}: {suggestions: any; data: any}) => {
  const [isMobile, isTablet] = useMediaQuery([
    '(max-width: 480px)',
    '(min-width: 481px) and (max-width:769px)',
  ])

  console.log(isMobile, isTablet)

  if (isMobile)
    return (
      <Flex direction={'column'}>
        <MobileHeader />
        <Box as="main">
          <Suggestions suggestions={suggestions} isMobile />
        </Box>
      </Flex>
    )

  if (isTablet)
    return (
      <Flex direction={'column'}>
        <Box as="aside" w="100%" h="100%" mb="40px">
          <Sidebar />
        </Box>

        <Box as="main" w="100%" h="80vh" position={'relative'}>
          <Suggestions suggestions={suggestions} />
        </Box>
      </Flex>
    )

  return (
    <Grid templateColumns={['1fr', '1fr 3.24fr']} gap="30px" mx="auto">
      <Box as="aside" w="100%" h="100%">
        <Sidebar />
      </Box>
      <Box as="main" w="100%" h="100vh" position={'relative'}>
        <Suggestions suggestions={suggestions} />
      </Box>
    </Grid>
  )
}

export default Home

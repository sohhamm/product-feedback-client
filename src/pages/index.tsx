import Sidebar from '@/components/sidebar/Sidebar'
import MobileHeader from '@/components/mobile/MobileHeader'
import Suggestions from '@/components/suggestions/Suggestions'
import type {GetServerSideProps} from 'next'
import {Box, Flex, Grid, Spinner} from '@chakra-ui/react'
import {useMediaQuerySSR} from '@/hooks/media-query-ssr'
import {getFeedbacks} from '@/service/feedback'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getFeedbacks()
  const data = JSON.parse(JSON.stringify(res))
  return {
    props: {suggestions: data.productRequests},
  }
}

const Home = ({suggestions}: {suggestions: any; data: any}) => {
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

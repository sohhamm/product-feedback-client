import * as React from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import MobileHeader from '@/components/mobile/MobileHeader'
import Suggestions from '@/components/suggestions/Suggestions'
import Loader from '@/components/ui/Loader'
import type {GetServerSideProps} from 'next'
import {Box, Flex, Grid} from '@chakra-ui/react'
import {useMediaQuerySSR} from '@/hooks/media-query-ssr'
import {getFeedbacks} from '@/service/feedback'
import {useDataStore} from '@/store/data'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getFeedbacks()
  const data = JSON.parse(JSON.stringify(res))
  return {
    props: {feedback: data.productRequests},
  }
}

const Home = ({feedback}: {feedback: any; data: any}) => {
  const setSuggestions = useDataStore(state => state.setSuggestions)
  const suggestions = useDataStore(state => state.suggestions)
  const isMobile = useMediaQuerySSR(480)
  const isTablet = useMediaQuerySSR(767)
  const isMax = useMediaQuerySSR(4000)

  const didMediaQueryResolve = isMobile || isTablet || isMax

  React.useEffect(() => {
    setSuggestions(feedback)
  }, [])

  console.log(suggestions)

  if (!didMediaQueryResolve) return <Loader />

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

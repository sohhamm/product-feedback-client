import {Box, Grid, Text} from '@chakra-ui/react'
import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Suggestions from '../components/suggestions/Suggestions'
import {getFeedbacks} from '../service/feedback'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getFeedbacks()
  const data = JSON.parse(JSON.stringify(res))
  return {
    props: {productRequests: data.productRequests},
  }
}

const Home = ({productRequests}: {productRequests: any}) => {
  console.log(productRequests)
  return (
    <Grid templateColumns="1fr 3.24fr" gap="30px" mx="auto">
      <Box as="aside" w="100%" h="100%">
        <Sidebar />
      </Box>
      <Box as="main" w="100%" h="100%">
        <Suggestions />
      </Box>
    </Grid>
  )
}

export default Home

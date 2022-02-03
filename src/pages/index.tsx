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
    props: {suggestions: data.productRequests},
  }
}

const Home = ({suggestions}: {suggestions: any}) => {
  return (
    <Grid templateColumns="1fr 3.24fr" gap="30px" mx="auto">
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

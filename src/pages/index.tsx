import {Box, Grid, Text} from '@chakra-ui/react'
import type {NextPage} from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <Grid templateColumns="1fr 3.24fr" gap="30px" mx="auto">
      <Box w="100%" h="100%">
        <Sidebar />
      </Box>
      <Box w="100%" h="100%"></Box>
    </Grid>
  )
}

export default Home

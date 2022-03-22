import {Box} from '@chakra-ui/react'
import Head from 'next/head'

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Product Feedback</title>
      </Head>
      <Box
        w="100%"
        minH="100vh"
        maxW="1110px"
        mx="auto"
        pt={['94px', '94px', '94px']}
        pb={['164px', '94px', '94px']}
        px={['24px', '39px', 'auto']}
      >
        {children}
      </Box>
    </>
  )
}

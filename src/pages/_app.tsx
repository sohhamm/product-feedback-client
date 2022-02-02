import '../styles/globals.css'
import Layout from '../layout/Layout'
import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '../styles/chakra-theme'
import '@fontsource/jost/400.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

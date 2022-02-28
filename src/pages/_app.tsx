import Layout from '@/layout/Layout'
import ErrorFallback from '@/layout/ErrorFallback'
import '@fontsource/jost/400.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '../styles/chakra-theme'
import {ErrorBoundary} from 'react-error-boundary'
import type {AppProps} from 'next/app'
import '@/styles/globals.css'
import 'focus-visible/dist/focus-visible'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
            window.location.reload()
          }}
        >
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

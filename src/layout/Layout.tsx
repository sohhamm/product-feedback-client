import {Box} from '@chakra-ui/react'

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({children}: LayoutProps) {
  return (
    <Box w="100%" minH="100vh" maxW="1110px" mx="auto" py="94px">
      {children}
    </Box>
  )
}

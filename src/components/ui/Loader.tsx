import {Flex, Spinner} from '@chakra-ui/react'

export default function Loader() {
  return (
    <Flex h="70vh" justify={'center'} align="center">
      <Spinner color="pink" size="xl" thickness="4px" />
    </Flex>
  )
}

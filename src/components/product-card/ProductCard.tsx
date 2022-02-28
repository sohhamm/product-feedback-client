import {Flex, Heading, Text} from '@chakra-ui/react'

const bgGradient =
  'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)'

export default function ProductCard() {
  return (
    <Flex
      flexDir="column"
      w="255px"
      h={['100%', '195px', '137px']}
      borderRadius="10px"
      background={bgGradient}
      p="24px"
      justify={'flex-end'}
    >
      <Heading fontSize={['20px']} color="white">
        Frontend Mentor
      </Heading>
      <Text color="white" opacity={0.75}>
        Feedback Board
      </Text>
    </Flex>
  )
}

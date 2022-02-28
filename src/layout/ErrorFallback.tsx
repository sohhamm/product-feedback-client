import Btn from '@/components/ui/Btn'
import EmptyIcon from '/public/assets/suggestions/illustration-empty.svg'
import {Flex, Image, Heading, Text} from '@chakra-ui/react'

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error?: any
  resetErrorBoundary?: any
}) {
  return (
    <Flex
      w="100%"
      flexDir={'column'}
      bg="white"
      align={'center'}
      mt="24px"
      borderRadius={'10px'}
      pb={['76px', '110px']}
      px={['24px', '0px']}
    >
      <Image src={EmptyIcon.src} alt="empty" mt={['76px', '111px']} mb="53px" />
      <Heading
        as="h2"
        mb="16px"
        fontSize={['18px', '24px']}
        color={'navyBlue2.400'}
      >
        Something went wrong!
      </Heading>

      <Text
        maxW="410px"
        mb="48px"
        color="#647196"
        fontSize={['13px', '16px']}
        textAlign={'center'}
      >
        {error.message}
      </Text>

      <Btn hoverColor="#C75AF6" onClick={resetErrorBoundary} isMobile>
        Reset Error
      </Btn>
    </Flex>
  )
}

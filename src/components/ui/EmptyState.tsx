import Btn from './Btn'
import EmptyIcon from '../../../public/assets/suggestions/illustration-empty.svg'
import PlusIcon from '../../../public/assets/shared/icon-plus.svg'
import {Flex, Heading, Image, Text} from '@chakra-ui/react'
import {useRouter} from 'next/router'

export default function EmptyState() {
  const router = useRouter()
  return (
    <Flex
      w="100%"
      flexDir={'column'}
      bg="white"
      align={'center'}
      mt="24px"
      borderRadius={'10px'}
    >
      <Image src={EmptyIcon.src} alt="empty" mt="111px" mb="53px" />
      <Heading as="h2" mb="16px" fontSize={['24px']} color={'navyBlue2.400'}>
        There is no feedback yet.
      </Heading>
      <Text
        maxW="410px"
        mb="48px"
        color="#647196"
        fontSize={['16px']}
        textAlign={'center'}
      >
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </Text>

      <Btn
        src={PlusIcon.src}
        hoverColor="#C75AF6"
        mb="110px"
        onClick={() => router.push('/feedback-new')}
      >
        Add Feedback
      </Btn>
    </Flex>
  )
}

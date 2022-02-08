import * as React from 'react'
import PlusIcon from '/public/assets/shared/icon-plus.svg'
import LeftIcon from '/public/assets/shared/icon-arrow-left.svg'
import {Box, Flex, Heading} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import Btn from '@/components/ui/Btn'

export default function Roadmap() {
  const router = useRouter()
  return (
    <Flex
      justify={'space-between'}
      borderRadius={'10px'}
      bg="navyBlue1.400"
      py="20px"
      px="32px"
      align="center"
    >
      <Box>
        <Btn
          src={LeftIcon.src}
          variant="link"
          color="white"
          onClick={() => router.push('/')}
          props={{w: 'auto'}}
          iconProps={{mr: '15px', color: 'white'}}
        >
          Go Back
        </Btn>
        <Heading fontSize={'24px'} color="white">
          Roadmap
        </Heading>
      </Box>

      <Btn src={PlusIcon.src} onClick={() => router.push('/feedback-new')}>
        Add Feedback
      </Btn>
    </Flex>
  )
}

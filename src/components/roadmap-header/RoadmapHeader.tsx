import Btn from '../ui/Btn'
import PlusIcon from '/public/assets/shared/icon-plus.svg'
import LeftIcon from '/public/assets/shared/icon-arrow-left.svg'
import {useRouter} from 'next/router'
import {Box, Flex, Heading} from '@chakra-ui/react'

export default function RoadmapHeader({isMobile}: {isMobile: boolean}) {
  const router = useRouter()

  const commonHeader = (
    <>
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
      <Btn
        src={PlusIcon.src}
        onClick={() => router.push('/feedback-new')}
        hoverColor="#C75AF6"
      >
        Add Feedback
      </Btn>
    </>
  )

  return (
    <>
      {isMobile ? (
        <Flex
          justify={'space-between'}
          bg="navyBlue1.400"
          align="center"
          pos="sticky"
          top={0}
          py="26px"
          px="24px"
          mx="-24px"
        >
          {commonHeader}
        </Flex>
      ) : (
        <Flex
          justify={'space-between'}
          borderRadius={'10px'}
          bg="navyBlue1.400"
          py="20px"
          px="32px"
          align="center"
        >
          {commonHeader}
        </Flex>
      )}
    </>
  )
}

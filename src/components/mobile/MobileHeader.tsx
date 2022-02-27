import * as React from 'react'
import {Box, Flex, Image, Heading, Text} from '@chakra-ui/react'
import HamburgerIcon from '/public/assets/shared/mobile/icon-hamburger.svg'

export default function MobileHeader() {
  return (
    <Flex
      as="header"
      bg={
        'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)'
      }
      pos="sticky"
      top={0}
      p="16px 24px"
      mt="-94px"
      mx="-39px"
      justify={'space-between'}
      align="center"
      zIndex={1}
    >
      <Box>
        <Heading fontSize="15px" color="white">
          Frontend Mentor
        </Heading>
        <Text color="white" opacity={0.75} fontSize="13px">
          Feedback Board
        </Text>
      </Box>
      <Image src={HamburgerIcon.src} alt="Menu" h="17px" w="20px" />
    </Flex>
  )
}

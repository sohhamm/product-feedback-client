import * as React from 'react'
import HamburgerIcon from '/public/assets/shared/mobile/icon-hamburger.svg'
import CloseIcon from '/public/assets/shared/mobile/icon-close.svg'
import MobDrawer from './MobDrawer'
import {Box, Flex, Image, Heading, Text, useDisclosure} from '@chakra-ui/react'

export default function MobileHeader() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const btnRef = React.useRef(null)

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
      mx="-24px"
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
      <Image
        src={isOpen ? CloseIcon.src : HamburgerIcon.src}
        alt="Menu"
        h="17px"
        w="20px"
        ref={btnRef}
        onClick={onOpen}
      />

      <MobDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Flex>
  )
}

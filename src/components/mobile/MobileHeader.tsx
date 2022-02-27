import * as React from 'react'
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import HamburgerIcon from '/public/assets/shared/mobile/icon-hamburger.svg'
import CloseIcon from '/public/assets/shared/mobile/icon-close.svg'
import {allTags} from '@/constants/constants'
import Tag from '../ui/Tag'
import Link from 'next/link'
import Status from '../ui/Status'

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
      <Image
        src={isOpen ? CloseIcon.src : HamburgerIcon.src}
        alt="Menu"
        h="17px"
        w="20px"
        ref={btnRef}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay h="91.5vh" mt="72px" />
        <DrawerContent h="91.5vh" mt="auto" bg="#F7F8FD">
          <DrawerBody
            display={'flex'}
            flexDir="column"
            alignItems="center"
            rowGap={'24px'}
            mt="24px"
          >
            <Flex
              alignItems={'center'}
              flexWrap={'wrap'}
              gap="14px"
              columnGap={['8px', '8px', '14px']}
              w="255px"
              borderRadius="10px"
              p="24px"
              bg="white"
            >
              {allTags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Flex>
            <Box w="255px" borderRadius="10px" p={['24px']} bg="white">
              <Flex justify="space-between" mb="24px">
                <Heading
                  fontSize={['18px', '18px', '20px']}
                  color="navyBlue2"
                  fontWeight={'bold'}
                >
                  Roadmap
                </Heading>
                <Link href="/roadmap" passHref>
                  <Text
                    color="darkBlue"
                    textDecor={'underline'}
                    fontWeight={'semibold'}
                    cursor={'pointer'}
                  >
                    View
                  </Text>
                </Link>
              </Flex>

              <Flex justify="space-between" mb="8px" fontSize={['16px']}>
                <Status color="#F49F85" text="Planned" isHomePage />
                <Text color="darkGray.400" fontWeight={'bold'}>
                  2
                </Text>
              </Flex>

              <Flex justify="space-between" mb="8px" fontSize={['16px']}>
                <Status color="#AD1FEA" text="In-progress" isHomePage />
                <Text color="darkGray.400" fontWeight={'bold'}>
                  3
                </Text>
              </Flex>

              <Flex justify="space-between" mb="8px" fontSize={['16px']}>
                <Status color="#62BCFA" text="Live" isHomePage />
                <Text color="darkGray.400" fontWeight={'bold'}>
                  1
                </Text>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

import React from 'react'
import Btn from '../ui/Btn'
import PlusIcon from '../../../public/assets/shared/icon-plus.svg'
import IllustrationIcon from '../../../public/assets/suggestions/icon-suggestions.svg'
import {Flex, Image, Text} from '@chakra-ui/react'
import SortMenu from '../ui/SortMenu'

export default function Suggestions() {
  return (
    <Flex w="100%" flexDir={'column'}>
      <Flex
        justify={'space-between'}
        h="72px"
        borderRadius={'10px'}
        bg="navyBlue1.400"
        py="14px"
        px="16px"
      >
        <Flex columnGap={'16px'} alignItems={'center'}>
          <Image
            src={IllustrationIcon.src}
            alt="illustration"
            h="24px"
            w="24px"
            ml="8px"
          />

          <Text fontWeight={'bold'} fontSize="18px" color="white">
            6 Suggestions
          </Text>
          <SortMenu />
        </Flex>
        <Btn src={PlusIcon.src} hoverColor="#C75AF6">
          Add Feedback
        </Btn>
      </Flex>
    </Flex>
  )
}

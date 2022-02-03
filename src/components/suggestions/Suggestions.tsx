import {Box, Flex} from '@chakra-ui/react'
import React from 'react'
import Btn from '../ui/Btn'
import PlusIcon from '../../../public/assets/shared/icon-plus.svg'

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
        <Flex></Flex>
        <Btn src={PlusIcon.src}>Button 1</Btn>
      </Flex>
    </Flex>
  )
}

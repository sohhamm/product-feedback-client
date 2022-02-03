import {Box, Flex, Image, Text} from '@chakra-ui/react'
import React from 'react'
import UpIcon from '../../../public/assets/shared/icon-arrow-up.svg'

export default function Upvotes({upvotes}: {upvotes: number}) {
  return (
    <Flex
      direction={'column'}
      justify={'center'}
      align={'center'}
      w="40px"
      h="53px"
      pt="14px"
      pb="8px"
      borderRadius={'10px'}
      bg={'lightGray.400'}
      _hover={{
        bg: '#CFD7FF',
        cursor: 'pointer',
      }}
      alignSelf={'flex-start'}
    >
      <Image src={UpIcon.src} alt="arrow-up" />
      <Text
        fontSize={'13px'}
        fontWeight={'bold'}
        mt="8px"
        color={'navyBlue2.400'}
      >
        {upvotes}
      </Text>
    </Flex>
  )
}

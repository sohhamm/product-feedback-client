import {Box} from '@chakra-ui/react'
import React from 'react'
import {useUIStore} from '../../store/ui'

export default function Tag({children}: {children: string}) {
  const activeTag = useUIStore(state => state.activeTag)
  return (
    <Box
      px="16px"
      py="5px"
      color={activeTag === children ? 'white' : 'darkblue'}
      bg={activeTag === children ? 'purple.400' : 'lightGray.400'}
      fontWeight={'semibold'}
      fontSize={'13px'}
      borderRadius={'12px'}
      _hover={{
        bg: '#CFD7FF',
        cursor: 'pointer',
      }}
    >
      {children}
    </Box>
  )
}

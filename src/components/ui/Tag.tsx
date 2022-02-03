import {useUIStore} from '../../store/ui'
import {Box} from '@chakra-ui/react'

export default function Tag({children}: {children: string}) {
  const activeTag = useUIStore(state => state.activeTag)
  const setActiveTag = useUIStore(state => state.setActiveTag)
  const isSelected = activeTag === children
  return (
    <Box
      px="16px"
      py="5px"
      color={isSelected ? 'white' : 'darkblue'}
      bg={isSelected ? 'darkBlue.400' : 'lightGray.400'}
      fontWeight={'semibold'}
      fontSize={'13px'}
      borderRadius={'12px'}
      _hover={{
        bg: isSelected ? '' : '#CFD7FF',
        cursor: 'pointer',
      }}
      onClick={() => setActiveTag(children)}
    >
      {children}
    </Box>
  )
}

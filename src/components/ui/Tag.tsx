import {useUIStore} from '../../store/ui'
import {Box} from '@chakra-ui/react'

export default function Tag({
  children,
  isViewOnly,
}: {
  children: string
  isViewOnly?: boolean
}) {
  const activeTag = useUIStore(state => state.activeTag)
  const setActiveTag = useUIStore(state => state.setActiveTag)
  const isSelected = activeTag === children

  const handleClick = () => {
    if (isViewOnly) return
    setActiveTag(children)
  }
  return (
    <Box
      w="fit-content"
      textTransform={'capitalize'}
      px="16px"
      py="5px"
      color={
        isViewOnly ? 'darkBlue.400' : isSelected ? 'white' : 'darkBlue.400'
      }
      bg={
        isViewOnly
          ? 'lightGray.500'
          : isSelected
          ? 'darkBlue.400'
          : 'lightGray.400'
      }
      fontWeight={'semibold'}
      fontSize={['12px', '13px']}
      borderRadius={'12px'}
      _hover={
        isViewOnly
          ? {}
          : {
              bg: isSelected ? '' : '#CFD7FF',
              cursor: 'pointer',
            }
      }
      onClick={handleClick}
    >
      {children}
    </Box>
  )
}

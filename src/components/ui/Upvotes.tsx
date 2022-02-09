import UpIcon from '../../../public/assets/shared/icon-arrow-up.svg'
import {Flex, Image, Text} from '@chakra-ui/react'
import {MouseEventHandler} from 'react'

interface UpvotesProps {
  upvotes: number
  onClick?: MouseEventHandler<HTMLDivElement>
  onMouseEnter?: MouseEventHandler<HTMLDivElement>
  onMouseLeave?: MouseEventHandler<HTMLDivElement>
  isRow?: boolean
  iconProps?: any
}

export default function Upvotes({
  upvotes,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isRow,
  iconProps,
}: UpvotesProps) {
  return (
    <Flex
      direction={isRow ? 'row' : 'column'}
      justify={'center'}
      align={'center'}
      w={isRow ? '69px' : '40px'}
      pt={isRow ? '2px' : '14px'}
      pb="8px"
      borderRadius={'10px'}
      bg={'lightGray.400'}
      _hover={{
        bg: '#CFD7FF',
        cursor: 'pointer',
      }}
      alignSelf={'flex-start'}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={UpIcon.src}
        alt="arrow-up"
        mt={iconProps?.mt ?? ''}
        mr={iconProps?.mr ?? ''}
      />
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

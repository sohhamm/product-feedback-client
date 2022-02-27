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
  isMobile?: boolean
}

export default function Upvotes({
  upvotes,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isRow,
  iconProps,
  isMobile,
}: UpvotesProps) {
  return (
    <Flex
      direction={isRow ? 'row' : 'column'}
      justify={'center'}
      align={'center'}
      w={isRow ? '69px' : '40px'}
      pt={isRow ? '2px' : '14px'}
      pb={isMobile ? '5px' : '8px'}
      borderRadius={'12px'}
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
        fontSize={['12px', '13px']}
        fontWeight={'bold'}
        mt={isMobile ? '3px' : '8px'}
        color={'navyBlue2.400'}
      >
        {upvotes}
      </Text>
    </Flex>
  )
}

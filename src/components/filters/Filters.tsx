import Tag from '../ui/Tag'
import {Flex} from '@chakra-ui/react'
import {allTags} from '@/constants/constants'

export default function Filters({onClose}: {onClose?: () => void}) {
  return (
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
        <Tag key={tag} onClose={onClose}>
          {tag}
        </Tag>
      ))}
    </Flex>
  )
}

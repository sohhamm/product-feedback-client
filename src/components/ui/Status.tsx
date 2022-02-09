import {Box, Flex, Text} from '@chakra-ui/react'

export default function Status({color, text}: {color: string; text: string}) {
  return (
    <Flex align={'center'}>
      <Box
        as="span"
        borderRadius={'60%'}
        w="8px"
        h="8px"
        bg={color}
        mr="16px"
      />
      <Text color="darkGray.400" textTransform="capitalize">
        {text}
      </Text>
    </Flex>
  )
}

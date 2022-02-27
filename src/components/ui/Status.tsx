import {Box, Flex, Text} from '@chakra-ui/react'

export default function Status({
  color,
  text,
  isHomePage,
}: {
  color: string
  text: string
  isHomePage?: boolean
}) {
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
      <Text
        color="darkGray.400"
        textTransform="capitalize"
        fontSize={
          isHomePage ? ['12px', '16px', '18px'] : ['12px', '13px', '18px']
        }
      >
        {text}
      </Text>
    </Flex>
  )
}

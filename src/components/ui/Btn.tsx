import {Button, Image} from '@chakra-ui/react'

interface BtnProps {
  children: string
  colorScheme?: string
  src?: string
  hoverColor?: string
}

export default function Btn({
  children,
  colorScheme = 'purple',
  src,
  hoverColor,
}: BtnProps) {
  return (
    <Button
      fontSize={'14px'}
      colorScheme={colorScheme}
      borderRadius={'10px'}
      w="158px"
      pt="13px"
      pb="11px"
      fontWeight={700}
      _hover={{
        bg: hoverColor,
      }}
    >
      {src && (
        <Image src={src} alt="icon" mr="5px" display={'inline'} mt="2px" />
      )}
      {children}
    </Button>
  )
}

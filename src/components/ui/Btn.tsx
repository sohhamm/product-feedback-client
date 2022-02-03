import {Button, Image} from '@chakra-ui/react'

interface BtnProps {
  children: string
  colorScheme?: string
  src?: string
  hoverColor?: string
  mb?: string
  onClick?: () => void
}

export default function Btn({
  children,
  colorScheme = 'purple',
  src,
  hoverColor,
  mb,
  onClick,
}: BtnProps) {
  return (
    <Button
      fontSize={'14px'}
      colorScheme={colorScheme}
      borderRadius={'10px'}
      w="158px"
      pt="13px"
      pb="11px"
      mb={mb ?? ''}
      fontWeight={700}
      _hover={{
        bg: hoverColor,
      }}
      onClick={onClick}
    >
      {src && (
        <Image src={src} alt="icon" mr="5px" display={'inline'} mt="2px" />
      )}
      {children}
    </Button>
  )
}

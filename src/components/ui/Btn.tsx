import {Button, Image} from '@chakra-ui/react'

interface BtnProps {
  children: string
  colorScheme?: string
  src?: string
  hoverColor?: string
  mb?: string
  onClick?: () => void
  variant?: string
  color?: string
}

export default function Btn({
  children,
  colorScheme = 'purple',
  color,
  src,
  hoverColor,
  mb,
  onClick,
  variant = 'solid',
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
        textDecor: variant === 'link' ? 'underline' : 'none',
      }}
      onClick={onClick}
      variant={variant}
      color={color ?? 'white'}
    >
      {src && (
        <Image src={src} alt="icon" mr="5px" display={'inline'} mt="2px" />
      )}
      {children}
    </Button>
  )
}

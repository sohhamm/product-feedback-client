import {Button, Image, StyleProps} from '@chakra-ui/react'

interface BtnProps {
  children: string
  colorScheme?: string
  src?: string
  hoverColor?: string
  mb?: string
  onClick?: () => void
  variant?: string
  color?: string
  props?: StyleProps
  iconProps?: StyleProps
  isMobile?: boolean
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
  props,
  iconProps,
  isMobile,
}: BtnProps) {
  return (
    <Button
      fontSize={isMobile ? '13px' : '14px'}
      colorScheme={colorScheme}
      borderRadius={'10px'}
      w={props?.w ?? '158px'}
      pt="13px"
      pb="11px"
      mb={mb ?? ''}
      mr={props?.mr ?? ''}
      fontWeight={props?.fontWeight ?? 700}
      _hover={{
        bg: hoverColor,
        textDecor: variant === 'link' ? 'underline' : 'none',
      }}
      onClick={onClick}
      variant={variant}
      color={color ?? 'white'}
    >
      {src && (
        <Image
          src={src}
          alt="icon"
          mr={iconProps?.mr ?? '5px'}
          display={'inline'}
          mt="2px"
          color={iconProps?.color ?? ''}
        />
      )}
      {children}
    </Button>
  )
}

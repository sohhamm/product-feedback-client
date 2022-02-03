import {Button, Image} from '@chakra-ui/react'

interface BtnProps {
  children: string
  colorScheme?: string
  src?: string
}

export default function Btn({children, colorScheme = 'purple', src}: BtnProps) {
  return (
    <Button
      fontSize={'14px'}
      colorScheme={colorScheme}
      borderRadius={'10px'}
      w="158px"
      pt="13px"
      pb="11px"
      fontWeight={700}
    >
      {src && (
        <Image src={src} alt="icon" mr="5px" display={'inline'} mt="1px" />
      )}
      {children}
    </Button>
  )
}

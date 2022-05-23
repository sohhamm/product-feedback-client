import * as React from 'react'
import {Box, Button} from '@chakra-ui/react'
import {FiLogIn} from 'react-icons/fi'
import {login} from '@/service/auth'

interface LoginBtnProps {}

export default function LoginBtn({}: LoginBtnProps) {
  const isLoggedIn = false

  const handleLogin = () => {
    login()
  }

  return (
    <Box mb="auto">
      {isLoggedIn ? <Profile /> : <Login handleLogin={handleLogin} />}
    </Box>
  )
}

function Profile() {
  // todo: random avatar generator
  return <></>
}

function Login({handleLogin}: {handleLogin: () => void}) {
  return (
    <Button
      variant="ghost"
      leftIcon={<FiLogIn />}
      color="white"
      ml={-4}
      _hover={{bgColor: 'rgb(0)'}}
      onClick={handleLogin}
    >
      Login
    </Button>
  )
}

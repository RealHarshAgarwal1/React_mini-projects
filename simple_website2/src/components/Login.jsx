import { Container,VStack,Heading,Input,Button,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Login = () => {
  return (
    <Container maxW={"container.xl"} height={'100vh'} p={'16'}>
        <form >
            <VStack alignItems={'stretch'} spacing={'8'} w={['fulls','96']} m={'auto'} my={'16'}>
                <Heading>Welcome Back</Heading>
                <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500'/>
                <Input placeholder='Password' type='password' required focusBorderColor='purple.500'/>
                <Button variant={'link' }alignSelf={'flex-end'}>
                    <Link to={'/forgetpassword'} >Forget Password?</Link>
                </Button>
                <Button colorScheme={'purple'} type={'submit'}>Login</Button>
                <Text colorScheme='purple'>Don't have an account? <Link to={'/signup'}>Sign Up</Link></Text>
            </VStack>
        </form>
    </Container>

  )
}

export default Login

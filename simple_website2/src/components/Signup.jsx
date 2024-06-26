import React from 'react'
import { Container, Heading, Input, Button, VStack, Text, Link, Avatar } from '@chakra-ui/react'


const Signup = () => {
  return (<Container maxW={"container.xl"} height={'100vh'} p={'16'}>
  <form >
      <VStack alignItems={'stretch'} spacing={'8'} w={['fulls','96']} m={'auto'} my={'16'}>
          <Heading>Gaming Hub</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}/>
          <Input placeholder='Name' type={'text'} required focusBorderColor='purple.500'/>
          <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500'/>
          <Input placeholder='Password' type='password' required focusBorderColor='purple.500'/>
          <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>
          <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
      </VStack>
  </form>
</Container>)
}

export default Signup

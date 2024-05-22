import React from 'react'
import { Box, Text , Stack, VStack,HStack,Heading,Button, Input } from '@chakra-ui/react'
import { AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={"#fff"}>
        <Stack direction={["column", "row"]} spacing={4}>
            <VStack alignItems={'stretch'} w={'full'} p={'4'}>
                <Heading size='md' color='white' textTransform= {'uppercase'}>
                    Subscribe to get Newsletter.
                </Heading>
                <HStack >
                    <Input Placeholder='Enter your email' border={'none'} borderRadius={'20px 0 0 20px'} outline={'none'} p={'0 20px'}/>
                    <Button p={'0'} color={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend  size={'20'}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} p={'4'}
            borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    Gaming Hub
                </Heading>
                <Text textAlign={'center'}>
                    All rights reserved.
                </Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'white'}>
                     <a target="blank" href="https://harshagarwal.hashnode.dev/">Blog</a>
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                     <a target="blank" href="https://www.linkedin.com/in/realharshagarwal/">Linkedin</a>
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                     <a target="blank" href="https://github.com/RealHarshAgarwal1">Github</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer

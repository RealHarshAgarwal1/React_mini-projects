import { Container, VStack,HStack, Input } from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import React from 'react'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'100vh'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'10vmax'}/>
            <form>
                <HStack>
                    <Input required type={'file'} css={{"&::file-selector-button": {border: "none",  width: "calc(100%+36px)",height:"100%",marginLeft:'-18px',color:'purple',bg: "white.500",cursor: "pointer"}}}/>
                    <button colorScheme={'purple'} type='submit'>
                        Upload
                    </button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload

import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,DrawerFooter,Button,useDisclosure} from '@chakra-ui/react'
import { VStack, HStack } from '@chakra-ui/layout'
import {Link} from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'



const Header = () => {

    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
    <>
    <Button zIndex={'overlay'} pos={'fixed'} left={'4'} top={'4'} colorScheme="purple" p={0} w={10} h={10} borderRadius={'full'} onClick={onOpen}>
        <BiMenuAltLeft size={20}></BiMenuAltLeft>
    </Button>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Gaming Hub</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={'onClose'} variant="ghost"colorScheme='purple'>
                            <Link to={'/'}>Home</Link>
                        </Button>
                        <Button onClick={'onClose'} variant="ghost"colorScheme='purple'>
                            <Link to={'/videos'}>Videos</Link>
                        </Button>
                        <Button onClick={'onClose'} variant="ghost"colorScheme='purple'>
                            <Link to={'/videos?category=free'}>Free Videos</Link>
                        </Button>
                        <Button onClick={'onClose'} variant="ghost"colorScheme='purple'>
                            <Link to={'/upload'}>Upload Videos</Link>
                        </Button>
                    </VStack>

                    <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                        <Button onClick={'onClose'} colorScheme='purple'>
                            <Link to={'/login'}>Log In</Link>
                        </Button>
                        <Button onClick={'onClose'}  colorScheme='purple' variant={'outline'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header

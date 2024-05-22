import { Box ,Img, position} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Heading} from '@chakra-ui/react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
import { Container } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { transform } from 'framer-motion'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const headingOptions ={
    pos:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    zIndex:"10",
    size:"4xl",
    fontSize:"4xl",
    texttransform:"uppercase",
    fontWeight:"bold",
    p:'4'
}


const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p='16'>
            <Heading
            texttransform={'uppercase'} fontWeight={'bold'} m='auto' py='2' w={'fit-content'} borderBottom={'2px solid white'}>
                Services
            </Heading>
            <Stack height='full' 
            py={'6'} 
            px={'4'} 
            alignItems={'center'} 
            justifyContent={'center'}
            direction={['column','row']}>
                <Image src={img5} alt='no image' filter={'hue-rotate(-0deg)'} h={['40','400']} />
            </Stack>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','0']} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
            </Text>
        </Container>
    </Box>
  )
}

const MyCarousel = () =>(
        <Carousel autoPlay infiniteLoop interval={1000}
        showStatus={false} 
        showThumbs={false}
        showArrows={false}>

        <Box w='full' h={'100vh'}>
            <Img src={img1} alt={'img1'} />
            <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>
                Coming of the Technology
                </Heading>
                </Box>
                <Box w='full' h={'100vh'}>
            <Img src={img2} alt={'img2'} />
            <Heading bgColor={'blackAlpha.200'} color={'white'} {...headingOptions}>
                Gaming is The Future
                </Heading>
                </Box>
                <Box w="full" h="100vh">
            <Img src={img3} alt={'img3'} />
            <Heading bgColor={'blackAlpha.200'} color={'white'} {...headingOptions}>
                Reality IS Virtual
            </Heading> 
            </Box>
            <Box w='full' h={'100vh'}>
            <Img src={img4} alt={'img4'} />
            <Heading bgColor={'blackAlpha.200'} color={'white'} {...headingOptions}>
                Virtual IS Reality
                </Heading>

        </Box>
        </Carousel>
    )

export default Home;
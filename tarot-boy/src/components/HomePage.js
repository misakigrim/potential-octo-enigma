import { Heading, VStack } from '@chakra-ui/react'
import ChangeStyle from './ChangeStyle'
import Nav from './Nav'
import Footer from './Footer'

function HomePage() {
    return(
        <>
            <Nav />
            <VStack p={4}>
                <Heading fontFamily='Crimson Text' mb='8' fontWeight='extrabold' size='3xl'>Altoma Tarot</Heading>
            </VStack>
            <Footer />
        </>
    )
}

export default HomePage
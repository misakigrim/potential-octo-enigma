import { Heading, VStack, Text, Link } from '@chakra-ui/react'
import ChangeStyle from './ChangeStyle'
import Nav from './Nav'
import Footer from './Footer'

function HomePage() {
    return(
        <>
            <Nav />
            <VStack p={4}>
                <Heading fontFamily='Crimson Text' mb='8' fontWeight='extrabold' size='3xl'>Altoma Tarot</Heading>
                <Text fontSize={24}>Welcome to the world of Altoma Tarot</Text><br/>
                <Text fontSize={20}>What are your burning questions?</Text>
                <Text fontSize={20}>What do you desire to know?</Text>
                <Text fontSize={20}>What do you hope for?</Text>
                <Text fontSize={20}>What are you dreading?</Text><br/>
                <Link href='/single'><Text fontSize={30}>Find out</Text></Link>
            </VStack>
            <Footer />
        </>
    )
}

export default HomePage
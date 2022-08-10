import { Heading, VStack } from '@chakra-ui/react'
import ChangeStyle from './ChangeStyle'
import Spread from './Spread'
import Single from './Single'
import Nav from './Nav'

function HomePage() {
    return(
        <>
            <Nav />
            <VStack p={4}>
                <Heading fontFamily ='Crimson Text' mb='8' fontWeight='extrabold' size='2xl'>Altoma Tarot</Heading>
            </VStack>
        </>
    )
}

export default HomePage
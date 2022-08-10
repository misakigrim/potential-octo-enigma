import Reading from "./Reading"
import Nav from "./Nav"
import { VStack, HStack } from '@chakra-ui/react'

function Spread() {
    return(
        <>
        <Nav />
        <VStack>
            <HStack className="spread">
                <Reading />
                <Reading />
                <Reading />
            </HStack>
        </VStack>
        </>
    )
}

export default Spread
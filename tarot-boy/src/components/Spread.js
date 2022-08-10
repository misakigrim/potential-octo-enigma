import Reading from "./Reading"
import Nav from "./Nav"
import { VStack, HStack, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Footer from "./Footer"

function Spread() {
    const [isClicked, setIsClicked] = useState(false)

    const updateText = () => {
        setIsClicked(true)
    }

  return (
    <>
        <Nav />
        <VStack>
            <Heading fontFamily='Crimson Text' mb='8' size='2xl'>Three Card Spread</Heading>
            <Text fontSize={20} className={(!isClicked) ? 'tagline-fade' : 'tagline-fade'}>{(!isClicked) ? 'Relax and concentrate on your question...' : '...'} </Text>
            <HStack>
                <VStack>
                    <Heading fontFamily='Crimson Text' mb='2' size='lg'>Past</Heading>
                    <Reading updateText={updateText} />
                </VStack>
                <VStack>
                    <Heading fontFamily='Crimson Text' mb='2' size='lg'>Present</Heading>
                    <Reading updateText={updateText} />
                </VStack>
                <VStack>
                    <Heading fontFamily='Crimson Text' mb='2' size='lg'>Future</Heading>
                    <Reading updateText={updateText} />
                </VStack>
            </HStack>
        </VStack>
        <Footer />
    </>
  )
}

export default Spread
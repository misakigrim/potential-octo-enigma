import React from 'react'
import { useState } from 'react'
import { VStack, Heading, Text } from '@chakra-ui/react' 
import Reading from './Reading'
import Nav from './Nav'
import Footer from './Footer'

function Single() {
    
    const [isClicked, setIsClicked] = useState(false)

    const updateText = () => {
        setIsClicked(true)
    }

  return (
    <>
        <Nav />
        <VStack>
            <Heading fontFamily='Crimson Text' mb='8' size='2xl'>Single Card Reading</Heading>
            <Text fontSize={20} className={(!isClicked) ? 'tagline-fade' : 'tagline-fade'}>{(!isClicked) ? 'Relax and concentrate on your question...' : '...'} </Text>
            <Reading updateText={updateText} />
        </VStack>
        <Footer />
    </>
  )
}

export default Single
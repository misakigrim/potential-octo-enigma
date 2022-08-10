import React from 'react'
import { VStack } from '@chakra-ui/react' 
import Reading from './Reading'
import Nav from './Nav'

function Single() {
  return (
    <>
        <Nav />
        <VStack>
            <Reading />
        </VStack>
    </>
  )
}

export default Single
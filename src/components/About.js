import React from 'react'
import { Heading, VStack, Text, Link } from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'

function About() {
  return (
    <>
        <Nav />
        <VStack>
            <Heading fontFamily='Crimson Text' mb='8' size='2xl'>About</Heading>
            <Text className='body-text' fontSize={24}>This is a simple Tarot App that helps to answer your questions and interpret your own circumstances</Text>
            <br/>
            <Text className='body-text' fontSize={24}>Altoma Tarot uses the Rider Waite deck and borrows data from the following sources:</Text>
            <br/>
            <Link href='https://www.kaggle.com/datasets/lsind18/tarot-json'>
                <Text className='body-text' fontSize={24}>Daria Chemkaeva's Kaggle Tarot Deck Dataset</Text>
            </Link>
            <Link href='https://github.com/ekelen/tarot-api'>
                <Text className='body-text' fontSize={24}>E Kelen's Tarot Card API on Github</Text>
            </Link>
            <Link data-testid='link' href='https://www.biddytarot.com/tarot-card-meanings/'>
                <Text className='body-text' fontSize={24}>Biddy Tarot</Text>
            </Link>
        </VStack>
        <Footer />
    </>
  )
}

export default About
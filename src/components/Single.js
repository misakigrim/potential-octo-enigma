import React from 'react'
import { useState } from 'react'
import { VStack, Heading, Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, } from '@chakra-ui/react' 
import Reading from './Reading'
import Nav from './Nav'
import Footer from './Footer'
const biddyData = require('../tarot-images-biddy.json')


function Single() {
    
    const [isClicked, setIsClicked] = useState(false)

    const updateText = () => {
        setIsClicked(true)
    }

    const [isUpright, setIsUpright] = useState(true)
    const flip = () => {
      setIsUpright(!isUpright)
    }

    const [cardName, setCardName] = useState('')
    const setName = (info) => {
      setCardName(info)
    }

    const biddyResults = []
    const bdresults = biddyData.cards.forEach(select => {
        if (select.name === cardName) {
            const desc = select.b_desc
            const rev = select.b_rev
            const up = select.b_up
            biddyResults.push(desc)
            biddyResults.push(up)
            biddyResults.push(rev)
        }
    })


    const returnData = (<Accordion allowToggle className='accordion-fade'>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box w='850px' flex='1' textAlign='left' fontSize={30}>
                                Card Description : {cardName}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel w='850px' pb={4} fontSize={20}>
                            {biddyResults[0]}
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box w='850px' flex='1' textAlign='left' fontSize={30}>
                                Interpretation
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel w='850px' pb={4} fontSize={20}>
                            {(isUpright) ? `${biddyResults[1]}` : `${biddyResults[2]}`}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>)

  return (
    <>
        <Nav />
        <VStack>
            <Heading fontFamily='Crimson Text' mb='8' size='2xl'>Single Card Reading</Heading>
            <Text fontSize={20} className={(!isClicked) ? 'tagline-fade' : 'tagline-fade'}>{(!isClicked) ? 'Relax and concentrate on your question...' : '...'} </Text>
            <Reading setName={setName} flip={flip} updateText={updateText} />
            {(isClicked) ? returnData : ''}
        </VStack>
        <Footer />
    </>
  )
}

export default Single
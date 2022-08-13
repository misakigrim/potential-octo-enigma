import React from 'react'
import '../App.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';
import { VStack, Link, Text, Heading, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    useDisclosure } from '@chakra-ui/react'
const tarotData = require('../tarot-images.json')
const biddyData = require('../tarot-images-biddy.json')


function ChooseCard() {
    const params = useParams();
    let { suit, number } = params
    const numberOrder = number

    // for drawer
    const { isOpen, onOpen, onClose } = useDisclosure()

    // set drawer
    const showInfo = () => {
        onOpen()
    }

    // for reverse state
    const [isUpright, setIsUpright] = useState(true)

    // see reversed
    const seeReverse = () => {
        setIsUpright(!isUpright)
        console.log(isUpright)
    }

    // length issue
    if (number.length == 1) {
        number = `0${number}`
    }

    // set card link
    let cardLink = ''
    if (suit === 'Trump') {
        cardLink = `../cards/ar${number}.jpg` 
    } else if (suit === 'Cups') {
        cardLink = `../cards/ar${number}.jpg` 
    } else if (suit === 'Swords') {
        cardLink = `../cards/sw${number}.jpg` 
    } else if (suit === 'Pentacles') {
        cardLink = `../cards/pe${number}.jpg` 
    } else if (suit === 'Wands') {
        cardLink = `../cards/wa${number}.jpg` 
    }
    
    const biddyResults = []
    tarotData.cards.forEach(card => {
        if (card.suit === suit && card.number === numberOrder) {
            const name = card.name
            const bdresults = biddyData.cards.forEach(select => {
                if (select.name === name) {
                    const desc = select.b_desc
                    const rev = select.b_rev
                    const up = select.b_up
                    biddyResults.push(desc)
                    biddyResults.push(up)
                    biddyResults.push(rev)
                }
            })
        }
    })

    return (
        <>
        <Nav />
            <VStack>
                    {tarotData.cards.map(card => {
                        if (card.suit === suit && card.number === numberOrder) {
                            const name = card.name
                            const {arcana, keywords} = card
                            const fortune = card.fortune_telling
                            const fortuneAll = fortune.join('. ')
                            const fortuneLastChar = fortuneAll.charAt(fortuneAll.length - 1)
                            const meanings_up = card.meanings.light
                            const meanings_rev = card.meanings.shadow
                            const archetype = card['Archetype']
                            const element = card.Elemental
                            const affirmation = card.Affirmation
                            const astrology = card.Astrology
                            const numerology = card.Numerology
                            const myth = card['Mythical/Spiritual']
                            const questions = card['Questions to Ask']
                            return (
                                <>
                                    <Heading fontFamily='Crimson Text' mb='4' size='xl'>{name}</Heading>
                                    <Button onClick={seeReverse}>See Reversed</Button><br />
                                    <Drawer
                                        isOpen={isOpen}
                                        placement='bottom'
                                        onClose={onClose}
                                        size='lg'
                                    >
                                        <DrawerOverlay />
                                        <DrawerContent>
                                            <DrawerCloseButton />
                                                <DrawerHeader fontSize='lg'>{(isUpright) ? `${name}` : `${name} (reversed)`}</DrawerHeader>
                                                <DrawerBody>
                                                    <p><strong>{arcana} | {suit} {(archetype ? `| Archetype: ${archetype}` : '' )} {(element) ? `| Elemental: ${element}` : '' }  {(astrology) ? `| Astrology: ${astrology}` : ''}</strong></p>
                                                    <p><em>{(affirmation) ? `~ Affirmation: ${affirmation} ~` : ''}</em></p>
                                                    <p><strong>Keywords:</strong> {(keywords.length < 1) ? `${keywords}.` : `${keywords.join(', ')}.`}</p>
                                                    <br/>
                                                    <p><strong>Fortune Telling:</strong> {(fortuneLastChar !== '?') ? `${fortuneAll}.` : fortuneAll}</p>
                                                    <br/>
                                                    <p><strong>Meaning</strong> <em>{isUpright ? '(light)' : '(shadow)'}</em>: {(isUpright) ? meanings_up.join(' - ') : meanings_rev.join(' - ')}</p>
                                                    <br/>
                                                    <p><strong>{(numerology) ? `Numerology`: ''}</strong>{(numerology) ? `: ${numerology}.` : ''}</p>
                                                    {numerology ? <br/> : ''}
                                                    <p><strong>{(myth) ? `Mythical/Spiritual`: ''}</strong>{(myth) ? `: ${myth}` : ''}</p>
                                                    {myth ? <br/> : ''}
                                                    <p><strong>Questions to ask:</strong> {(questions.length < 1) ? `${questions}` : `${questions.join(' ')}`}</p>
                                                </DrawerBody>
                                                <DrawerFooter/>
                                        </DrawerContent>
                                    </Drawer>  
                                </> 
                            )
                        }
                    })} 
                <img 
                    src={cardLink}
                    style={{ marginBottom:'20px'}}
                    onClick={showInfo}
                    alt='card'
                    className={(isUpright) ? 'upright choose' : 'reversed choose'} 
                    >
                </img>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box w='850px' flex='1' textAlign='left' fontSize={30}>
                            Card Description
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
                </Accordion>
                <Text fontSize={20}>test</Text>
                <Link href='/index'><Button>back to index</Button></Link>
            </VStack>


        <Footer />
        </>
    )
}

export default ChooseCard
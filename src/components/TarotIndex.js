import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Link } from '@chakra-ui/react'
import '../App.css'
const tarotData = require('../tarot-images.json')


function TarotIndex() {
  return (
    <>
        <Nav />
        <VStack>
        <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
                <Tab>Major Arcana</Tab>
                <Tab>Minor Arcana: Cups</Tab>
                <Tab>Minor Arcana: Swords</Tab>
                <Tab>Minor Arcana: Pentacles</Tab>
                <Tab>Minor Arcana: Wands</Tab>
            </TabList>
            <TabPanels>
                <TabPanel display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    {tarotData.cards.map(card => {
                        if (card.arcana === 'Major Arcana') {
                            const cardLink = `./cards/ar${card.img.slice(1)}`
                            console.log(cardLink)
                            const cardRoute = `/${card.suit}/${card.number}`
                            return (
                                <>
                                <Link href={cardRoute}>
                                    <img 
                                        src={cardLink}
                                        className='card-index'
                                        >
                                    </img>
                                </Link>
                                </> 
                            )
                        }
                    })}
                </TabPanel>
                <TabPanel display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    {tarotData.cards.map(card => {
                        if (card.suit === 'Cups') {
                            const cardLink = `./cards/cu${card.img.slice(1)}`
                            const cardRoute = `/${card.suit}/${card.number}`
                            return (
                                <>
                                <Link href={cardRoute}>
                                    <img 
                                        src={cardLink}
                                        className='card-index'
                                        >
                                    </img>
                                </Link>
                                </> 
                            )
                        }
                    })}
                </TabPanel>
                <TabPanel display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    {tarotData.cards.map(card => {
                            if (card.suit === 'Swords') {
                                const cardLink = `./cards/sw${card.img.slice(1)}`
                                const cardRoute = `/${card.suit}/${card.number}`
                                return (
                                    <>
                                    <Link href={cardRoute}>
                                        <img 
                                            src={cardLink}
                                            className='card-index'
                                            >
                                        </img>
                                    </Link>
                                    </> 
                                )
                            }
                        })} 
                </TabPanel>
                <TabPanel display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    {tarotData.cards.map(card => {
                        if (card.suit === 'Pentacles') {
                            const cardLink = `./cards/pe${card.img.slice(1)}`
                            const cardRoute = `/${card.suit}/${card.number}`
                            return (
                                <>
                                <Link href={cardRoute}>
                                    <img 
                                        src={cardLink}
                                        className='card-index'
                                        >
                                    </img>
                                </Link>
                                </> 
                            )
                        }
                    })}
                </TabPanel>
                <TabPanel display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    {tarotData.cards.map(card => {
                        if (card.suit === 'Wands') {
                            const cardLink = `./cards/wa${card.img.slice(1)}`
                            const cardRoute = `/${card.suit}/${card.number}`
                            return (
                                <>
                                <Link href={cardRoute}>
                                    <img 
                                        src={cardLink}
                                        className='card-index'
                                        >
                                    </img>
                                </Link>
                                </> 
                            )
                        }
                    })}
                </TabPanel>
            </TabPanels>
            </Tabs>
        </VStack>
        <Footer />
    </>
  )
}

export default TarotIndex
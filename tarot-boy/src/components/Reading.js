import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../index.css';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
const tarotData = require('../tarot-images.json')


function Reading() {
    const [currentCard, setCurrentCard] = useState({})
    const [isUpright, setIsUpright] = useState(true)
    const [isRevealed, setIsRevealed] = useState(false)

    // for drawer
    const { isOpen, onOpen, onClose } = useDisclosure()


    // get random 1 card
    const URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1"

    const reveal = () => {
        if (isRevealed === false) {
            setIsRevealed(true)
            console.log('unrevealing...')
        } else {
            // -- set modal to display
            onOpen()
            console.log('revealed + clicked')
        }
    }

    useEffect(() => {
        async function getReading() {
            const response = await axios.get(URL);
            setCurrentCard(response.data.cards[0]);
            const status = Math.random() >= 0.5
            setIsUpright(status)
            // console.log(status)
            // console.log(response.data.cards)
            // console.log(tarotData)
        }
        getReading();
    }, []);
    
    const {name, name_short, suit, type, value, desc, meaning_rev, meaning_up} = currentCard
    const cardLink = `./cards/${name_short}.jpg`
    const cardLinkBack = './cards/cardback.png'

    {for (const each of tarotData.cards){
        if (name == each.name) {
            const {arcana, suit, keywords} = each
            const fortune = each.fortune_telling
            const meanings_up = each.meanings.light
            const meanings_rev = each.meanings.shadow
            const archetype = each.Archetype
            const element = each.Elemental
            const myth = each['Mythical/Spiritual']
            const questions = each['Questions to Ask']
            }
        }
    }
    // full return 
    // return(
    //     <div className='full-card'>
    //         <h1>{(isUpright) ? `${name}` : `${name} (reversed)`}</h1>
    //         <img src={(isRevealed) ? cardLink : cardLinkBack} className={(isUpright) ? 'upright' : 'reversed'} onClick={reveal}/>
    //         <p>Description: {desc}</p>
    //         <p>{(isUpright) ? `Upright: ${meaning_up}` : `Reversed: ${meaning_rev}`}</p>
    //     </div>
    // )

    // card return only
    return (
        <div className='full-card'>
            <img 
            src={(isRevealed) ? cardLink : cardLinkBack} 
            className={(isUpright) ? 'upright' : 'reversed'} 
            onClick={reveal}
            />
            {tarotData.cards.map(each => {
                if (name == each.name) {
                    const {arcana, suit, keywords} = each
                    const fortune = each.fortune_telling
                    const meanings_up = each.meanings.light
                    const meanings_rev = each.meanings.shadow
                    const archetype = each['Archetype']
                    const element = each.Elemental
                    const affirmation = each.Affirmation
                    const astrology = each.Astrology
                    const myth = each['Mythical/Spiritual']
                    const questions = each['Questions to Ask']
                    return(
                        <Drawer
                            isOpen={isOpen}
                            placement='bottom'
                            onClose={onClose}
                            size='lg'
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                    <DrawerHeader>{name}</DrawerHeader>
                                    <DrawerBody>
                                        <p><strong>{arcana} | {suit} {(archetype ? `| Archetype: ${archetype}` : '' )} {(element) ? `| Elemental: ${element}` : '' }  {(astrology) ? `| Astrology: ${astrology}` : ''}</strong></p>
                                        <p><em>{(affirmation) ? `~ Affirmation: ${affirmation} ~` : ''}</em></p>
                                        <p>Keywords: {keywords.join(', ')}</p>
                                        <br/>
                                        <p>Fortune Telling: {fortune.join('. ')}</p>
                                    </DrawerBody>
                                    <DrawerFooter/>
                            </DrawerContent>
                        </Drawer> 
                    )
                }
            })}
            
        </div>
    )

}

export default Reading
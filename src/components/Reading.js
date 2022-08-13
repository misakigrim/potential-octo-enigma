import { useState, useEffect } from 'react'
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
const biddyData = require('../tarot-images-biddy.json')


function Reading(props) {
    const [currentCard, setCurrentCard] = useState({})
    const [isRevealed, setIsRevealed] = useState(false)

    // for drawer
    const { isOpen, onOpen, onClose } = useDisclosure()


    // get random 1 card
    const URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1"

    const reveal = () => {
        if (isRevealed === false) {
            setIsRevealed(true)
            props.updateText()
            // console.log('unrevealing...')
        } else if (name !== props.cardName) {
            console.log(props.cardName)
            console.log(name)
            props.setName(name)
        } else {    
            // -- set modal to display
            onOpen()
            console.log('modal')
        }
    }

    useEffect(() => {
        async function getReading() {
            const response = await axios.get(URL);
            setCurrentCard(response.data.cards[0]);
            const status = Math.random() >= 0.5
            props.flip(status)
            // console.log(status)
            // console.log(response.data.cards)
            // console.log(tarotData)
        }
        getReading();
    }, []);
    
    const {name, name_short, suit, type, value, desc, meaning_rev, meaning_up} = currentCard
    const cardLink = `./cards/${name_short}.jpg`
    const cardLinkBack = './cards/cardback.png'

    props.setName(name)

    // card return only
    return (
        <div className='full-card'>
            <img 
            src={(isRevealed) ? cardLink : cardLinkBack} 
            className={(props.isUpright) ? 'upright' : 'reversed'} 
            onClick={reveal}
            style={{margin: '10px'}}
            />
            {tarotData.cards.map(each => {
                if (name === each.name) {
                    const {arcana, suit, keywords} = each
                    const fortune = each.fortune_telling
                    const fortuneAll = fortune.join('. ')
                    const fortuneLastChar = fortuneAll.charAt(fortuneAll.length - 1)
                    const meanings_up = each.meanings.light
                    const meanings_rev = each.meanings.shadow
                    const archetype = each['Archetype']
                    const element = each.Elemental
                    const affirmation = each.Affirmation
                    const astrology = each.Astrology
                    const numerology = each.Numerology
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
                                    <DrawerHeader fontSize='lg'>{(props.isUpright) ? `${name}` : `${name} (reversed)`}</DrawerHeader>
                                    <DrawerBody>
                                        <p><strong>{arcana} | {suit} {(archetype ? `| Archetype: ${archetype}` : '' )} {(element) ? `| Elemental: ${element}` : '' }  {(astrology) ? `| Astrology: ${astrology}` : ''}</strong></p>
                                        <p><em>{(affirmation) ? `~ Affirmation: ${affirmation} ~` : ''}</em></p>
                                        <p><strong>Keywords:</strong> {(keywords.length < 1) ? `${keywords}.` : `${keywords.join(', ')}.`}</p>
                                        <br/>
                                        <p><strong>Fortune Telling:</strong> {(fortuneLastChar !== '?') ? `${fortuneAll}.` : fortuneAll}</p>
                                        <br/>
                                        <p><strong>Meaning</strong> <em>{props.isUpright ? '(light)' : '(shadow)'}</em>: {(props.isUpright) ? meanings_up.join(' - ') : meanings_rev.join(' - ')}</p>
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
                    )
                }
            })}
            
        </div>
    )

}

export default Reading
import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css';
const tarotData = require('./tarot-images.json')

function Reading() {
    const [currentCard, setCurrentCard] = useState({})
    const [isUpright, setIsUpright] = useState(true)
    const [isRevealed, setIsRevealed] = useState(false)

    // get random 1 card
    const URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1"

    const reveal = () => {
        if (isRevealed === false) {
            setIsRevealed(true)
        }
        // -- set modal to display
        console.log('clicked')
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

    return(
        <div className='full-card'>
            <h1>{(isUpright) ? `${name}` : `${name} (reversed)`}</h1>
            <img src={(isRevealed) ? cardLink : cardLinkBack} className={(isUpright) ? 'upright' : 'reversed'} onClick={reveal}/>
            <p>Description: {desc}</p>
            <p>{(isUpright) ? `Upright: ${meaning_up}` : `Reversed: ${meaning_rev}`}</p>
        </div>
    )

}

export default Reading
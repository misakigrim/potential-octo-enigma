import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css';

function Reading() {
    const [currentCard, setCurrentCard] = useState({})
    const [isUpright, setIsUpright] = useState(true)

    // get random 1 card
    const URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1"

    useEffect(() => {
        async function getReading() {
            const response = await axios.get(URL);
            setCurrentCard(response.data.cards[0]);
            const status = Math.random() >= 0.5
            setIsUpright(status)
            // console.log(status)
            // console.log(response.data.cards)
        }
        getReading();
    }, []);
    
    const {name, name_short, suit, type, value, desc, meaning_rev, meaning_up} = currentCard
    const cardLink = `./cards/${name_short}.jpg`

    return(
        <div className='full-card'>
            <h1>{(isUpright) ? `${name}` : `${name} (reversed)`}</h1>
            <img src={cardLink} className={(isUpright) ? 'upright' : 'reversed'} />
            <p>Description: {desc}</p>
            <p>{(isUpright) ? `Upright: ${meaning_up}` : `Reversed: ${meaning_rev}`}</p>
        </div>
    )

}

export default Reading
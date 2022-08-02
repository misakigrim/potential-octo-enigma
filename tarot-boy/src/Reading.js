import { useState, useEffect } from 'react'
import axios from 'axios'

function Reading() {
const [currentCard, setCurrentCard] = useState({})

    // get random 1 card
    const URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1"

    useEffect(() => {
        async function getReading() {
            const response = await axios.get(URL);
            setCurrentCard(response.data.cards[0]);
            // console.log(response.data.cards[0])
        }
        getReading();
    }, []);
    
    const {name, name_short, suit, type, value, desc, meaning_rev, meaning_up} = currentCard
    return(
        <div className='full-card'>
            <h1>{name}</h1>
            <p>Reversed: {meaning_rev}</p>
            <p>Upright: {meaning_up}</p>
            <p>Description: {desc}</p>
        </div>
    )

}

export default Reading
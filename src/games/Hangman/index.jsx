import React, { useState, useEffect } from 'react';
import './style.css'
import Figure from "./figure";
import Word from "./word";
import WrongLetters from "./wrongLetters";


const words = ['application', 'programming', 'interface', 'wizard']
let selectedWord = words[Math.floor(Math.random() * words.length)]

function Hangman() {
    const [playabel, setPlayabel] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    useEffect(() => {

    })

    return (
        <>
            <h1>Hangman</h1>
            <p>Find the hidden word - Enter a letter</p>
            <div className='game-container'>
                <Figure />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
            </div>

        </>
    );
}

export default Hangman;
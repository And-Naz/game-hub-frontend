import React from 'react';
import StartPage from "../StartPage"
import Game from '../Game';
import "./style.css"
const Board = () => {
    return (
        <div className='board'>
            {/* <StartPage /> */}
            <Game/>
        </div>
    );
}

export default Board;

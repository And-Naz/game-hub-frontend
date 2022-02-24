import React from 'react';
import Tray from './Tray'
import './style.css'
const GamesList = ({info}) => {
    return (
        <div className='game-list'>
            <Tray info={info}/>
        </div>
    );
}

export default GamesList;

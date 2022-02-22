import React from 'react';
import './style.css'
const TrayIframe = ({srcGame}) => {
    return (
        <div className='game-play__iframe-box iframe-box'>
            <iframe width="100%" height="100%" src={srcGame} scrolling="no"></iframe>
        </div>
    );
}

export default TrayIframe;

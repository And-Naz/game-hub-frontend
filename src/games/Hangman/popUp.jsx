import React from 'react';

function PopUp() {
    return (
        <div className='popup-container'>
            <div className='popup'>
                <h2 className='final-message'></h2>
                <h3 className='final-message-reveal-word'></h3>
                <button className='play-button'>Play Again</button>
            </div>
        </div>
    );
}

export default PopUp;
import React from 'react';

function YouWin({winner, refreshPage}) {
    return (
        <div className='winner'>
            <h1 className='winner__header'>Winner {winner}</h1>
            <button className='winner__btn' onClick={refreshPage}>Play Again</button>
        </div>
    );
}

export default YouWin;
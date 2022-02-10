import React from 'react';

function Results({children, refreshPage}) {
    return (
        <div className='popUp'>
            <div className='result'>
                <h1 className='result__header'>{children}</h1>
                <button onClick={refreshPage}>Play Again</button>
            </div>
        </div>
    );
}

export default Results;
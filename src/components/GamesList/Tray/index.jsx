import React from 'react';
import Card from   './Card'
import './style.css'
const Tray = ({info}) => {
    return (
        <div className='game-list_tray tray'>
            {info.map(el=>
                <Card key={el.id} item={el}/>
            )}
            
        </div>
    );
}

export default Tray;

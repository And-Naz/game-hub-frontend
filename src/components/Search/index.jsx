import React from 'react';
import './style.css'

function Search(props) {
    return (props.trigger) ? (
        <div className='search_block'>
            <div className='search_input'>
                <button onClick={() => props.setTrigger(false)} className='close_btn'>X</button>
                <input type="text" name='search' placeholder='Search GAME-HUB'/>
            </div>
        </div>
    ): '';
}

export default Search;
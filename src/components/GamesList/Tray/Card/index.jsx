import React from 'react';
import Rating from '../../../ui/Rating';
import './style.css'
const Card = ({item}) => {
    console.log(item,'item')
    return (
        <a className='game-list__game-card tray__game-card game-card'  href="https://gidonline.io/film/kingsmen-nachalo/">
            <img width="95%" height="85%" src={item.url} alt={`${item.name}_img`}/>
            <span>{item.name}</span>
            <div className="game-card__f-rate">
                <Rating rating={item.rating}/>
            </div>
            <div className="game-card__mqn">{item.year.in}</div>

        </a>
    );
}

export default Card;

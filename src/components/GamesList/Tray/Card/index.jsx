import React from 'react';
import Rating from '../../../ui/Rating';
import { Link } from "react-router-dom";
import Image from  '../../../ui/Image';
import './style.css'
const Card = ({item}) => {
    return (
        <Link to={`/games/game/${item.id}`} className='game-list__game-card tray__game-card game-card'  href="https://gidonline.io/film/kingsmen-nachalo/">
            {/* <img width="95%" height="85%" src={item.url} alt={`${item.name}_img`}/> */}
            <Image  width="95%" height="85%" src={item.url} alt={`${item.name}_img`}/>
            <span>{item.name}</span>
            <div className="game-card__f-rate">
                <Rating rating={item.rating}/>
            </div>
            <div className="game-card__mqn">{item.year.name}</div>
        </Link>
    );
}

export default Card;

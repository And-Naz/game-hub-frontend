import React from 'react';
import Rating from '../../../ui/Rating';
import { Link } from "react-router-dom";
import Image from  '../../../ui/Image';
import './style.css'
const Card = ({item}) => {
const {id,name,rating,imageSrc} = item 
    return (
        <Link to={`/games/game/${id}`} className='game-list__game-card tray__game-card game-card'>
            {/* <img width="95%" height="85%" src={item.url} alt={`${item.name}_img`}/> */}
            <Image  width="95%" height="85%" src={imageSrc} alt={`${name}_img`}/>
            <span>{name}</span>
            <div className="game-card__f-rate">
                <Rating rating={rating}/>
            </div>
            <div className="game-card__mqn">2022</div>
        </Link>
    );
}

export default Card;

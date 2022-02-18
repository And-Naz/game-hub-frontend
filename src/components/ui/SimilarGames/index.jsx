import React from 'react';
import CarouselBox from '../../CarouselBox'
import playh2Img from "../../../assets/tray/playh2.png"

import Slider from 'infinite-react-carousel';

import "./style.css"

const SimilarGames = ({info}) => {
    return (
        <div className='game-play__similar-games similar-games'>
            <div className='similar-games__title' style={{backgroundImage:`url(${playh2Img})`}}><h2>Что еще играть</h2></div>
            <CarouselBox info={info} content={"Games"} title={false}/>
        </div>
    );
}

export default SimilarGames;

import React from 'react';
import "./style.css"
import logo from '../Assets/logo.png'
import bg from '../Assets/bg.png'

const StartPage = () => {
    return (
        <div className='start-page'>
            <div className="start-page__logo">
                <img width="100%" height="100%" src={logo}></img>
            </div>
            <div className='start-page__btn'>
                <button>START</button>
            </div>
        </div>
    );
}

export default StartPage;

import React from 'react';
import './home.css'
import Button from "../../ui/button/button";

function Home() {
    return (
        <section>
            <div className="img-container">
                <img className='img' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/banner-bg.jpg"/>
                <div className='layer'></div>
            </div>
            <div className='container'>
                <h1>
                    Clan War:
                    <br/>
                    Global Esports Cup
                </h1>
                <p><strong>Virtus PRO</strong> vs <strong>Team Secret</strong></p>
                <Button children='Learn More' type='button' buttonSize='btn-large' />
            </div>
        </section>
    );
}


export default Home;
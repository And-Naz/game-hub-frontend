import React from 'react';
import './home.css'
import Button from "../../ui/button/button";

function Home() {
    return (
        <section className='content-wrap'>
            <div className='youplay-banner-parallax youplay-banner youplay-banner-id-1 mid banner-top'>
                <div className='image'>
                    <div className="jarallax-container-2">
                        <img className='jarallax-img' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/banner-bg.jpg"/>
                    </div>
                </div>
                <div className='info'>
                    <div className='container'>
                        <h2>
                            Clan War:
                            <br/>
                            Global Esports Cup
                        </h2>
                        <p>
                            <strong>Virtus PRO</strong> vs <strong>Team Secret</strong>
                        </p>
                        <Button children='Learn More' type='button' buttonSize='btn-large' />

                    </div>
                </div>



            </div>
        </section>
        // <div>HOME PAGE</div>
    );
}



export default Home;
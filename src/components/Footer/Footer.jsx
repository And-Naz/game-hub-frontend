import React from "react";
import './Footer.css'
// import {TestDiv} from "./test";
import Responsive from "./PartnersSlider/PartnersSlider";
import Partners from "./PartnersSlider/PartnersSlider";

const Footer = () => {

    const cardClasses = ["facebookCard", "twitterCard", "googleCard", "youtubeCard"]

    return (
        <>
        <Partners />
        <div className="footerWrapper">


        <div className="footerWrapper">
            <section className="feedback-section">

                {/*<span className="footer-icon"><i ref={"*"}/></span>*/}
                <h2>Connect socially with "AVAHas Games"</h2>
                <div className="footerSocialCardsContainer">
                    <div className={cardClasses[0]}>
                        <i>F icon</i>
                        <p>Link on Facebook</p>
                    </div>
                    <div className={cardClasses[1]}>
                        <i>T icon</i>
                        <p>Follow on Twitter</p>
                    </div>
                    <div className={cardClasses[2]}>
                        <i>G icon</i>
                        <p>Follow on Google+</p>
                    </div>
                    <div className={cardClasses[3]}>
                        <i>Y icon</i>
                        <p>Watch on Youtube</p>
                    </div>
                </div>

                    <div className="footerCopyright">
                        <strong> AVAHas Games © 2022. All rights reserved</strong>
                    </div>

            </section>
            {/*<div>*/}
            {/*    <TestDiv/>*/}
            {/*</div>*/}

        </div>
        </div>
        </>
    )
}

export default Footer;



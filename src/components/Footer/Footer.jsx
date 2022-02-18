import React from "react";
import Partners from "./PartnersSlider/PartnersSlider";
import Social from "../Social";
import './Footer.css';

const Footer = () => {

    const open = (path) => window.open(path)

    return (
        <>
            <Partners/>
            <div className="footerWrapper">


                <div className="footerWrapper">
                    <section className="feedback-section">

                        <p>Connect socially with "AVAHas Games"</p>
                        <div className="footerSocialCardsContainer">
                            <div className="footerSocialCards" onClick={() => open("https://www.facebook.com/")}>
                                <img src={require("./Images/icons8-facebook-150.png")} alt='image does not exist'/>
                                <p>Link on Facebook</p>
                            </div>
                            <div className="footerSocialCards" onClick={() => open("https://www.twitter.com/")}>
                                <img src={require("./Images/icons8-twitter-150.png")} alt='image does not exist'/>
                                <p>Follow on Twitter</p>
                            </div>
                            <div className="footerSocialCards" onClick={() => open("https://www.mail.google.com/")}>
                                <img src={require("./Images/icons8-google-96.png")} alt='image does not exist'/>
                                <p>Follow on Google+</p>
                            </div>
                            <div className="footerSocialCards" onClick={() => open("https://www.youtube.com/")}>
                                <img src={require("./Images/icons8-youtube-squared-150.png")} alt='image does not exist'/>
                                <p>Watch on Youtube</p>
                            </div>
                        </div>

                        <div className="footerCopyright">
                            <strong> AVAHas Games © 2022. All rights reserved</strong>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Footer;



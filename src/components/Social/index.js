import React from "react";
import "./style.css"

const Social = () => (
    <div className="wrapper">
            <h3>Why Buy from
                <strong> AVAHas Games</strong>
            </h3>
            <div className="social-icons">
                <div className="social-icon">
                    <a href="https://www.facebook.com/nKPremiumThings/"
                       target="_blank"
                       rel="noopener noreferrer">
                    </a>
                        <img src={require("./SocialImages/partner-logo-1.png")}/>
                </div>

                <div className="social-icon">
                    <a href="https://twitter.com/nkdevv"
                       target="_blank"
                       rel="noopener noreferrer">
                    </a>
                        <img src={require("./SocialImages/partner-logo-2.png")}/>
                </div>

                <div className="social-icon">
                    <a
                        href="https://plus.google.com/105540650896894558095/posts"
                        target="_blank" rel="noopener noreferrer">
                    </a>
                        <img src={require("./SocialImages/partner-logo-3.png")}/>
                </div>

                <div className="social-icon">
                    <a
                        href="https://www.youtube.com/user/nKdevelopers"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                        <img src="./SocialImages/partner-logo-4.png"/>
                </div>
            </div>
    </div>


        // <div className="wrapper social">
        //     <div className="container" style="transform: translate3d(0px, 0px, 0px); opacity: 0.99934;">
        //         <h3>Connect socially with
        //             <strong>youplay</strong>
        //         </h3>
        //         <div className="social-icons">
        //             <div className="social-icon">
        //                 <a href="https://www.facebook.com/nKPremiumThings/" target="_blank"
        //                    rel="noopener noreferrer">
        //
        //                     {/*<i class="fa fa-facebook-square"></i>*/}
        //                     <span>Like on Facebook</span> </a>
        //             </div>
        //             <div className="social-icon">
        //                 <a href="https://twitter.com/nkdevv" target="_blank"
        //                    rel="noopener noreferrer">
        //
        //                     <span>Follow on Twitter</span> </a>
        //             </div>
        //             <div className="social-icon">
        //                 <a href="https://plus.google.com/105540650896894558095/posts"
        //                    target="_blank" rel="noopener noreferrer">
        //
        //
        //                     <span>Follow on Google+</span> </a>
        //             </div>
        //             <div className="social-icon">
        //                 <a href="https://www.youtube.com/user/nKdevelopers" target="_blank"
        //                    rel="noopener noreferrer">
        //
        //                     {/*<i class="fa fa-youtube-square"></i>*/}
        //                     <span>Watch on Youtube</span> </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

)

export default Social
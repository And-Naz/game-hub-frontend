import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

export default class Partners extends Component {
    render() {
        return (
            <div >
                <h2> PARTNERS </h2>
                <Slider {...settings}>
                    <div className="firstPartner">
                        <h3>1</h3>
                        <img width="250" height="200"
                             src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1-500x333.png"
                        />
                    </div>
                    <div className="firstPartner">
                        <p>2</p>
                        <img width="250" height="200"
                             src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1-500x333.png"
                        />
                    </div>
                    <div className="firstPartner">
                        <h3>3</h3>
                        <img width="250" height="200"
                             src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1-500x333.png"
                        />
                    </div>
                    <div className="firstPartner">
                        <h3>4</h3>
                        <img width="250" height="200"
                             src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1-500x333.png"
                        />
                    </div>
                    <div className="firstPartner">
                        <h3>5</h3>
                        <img width="250" height="200"
                             src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1-500x333.png"
                        />
                    </div>
                    <div className="firstPartner">
                        <h3>6</h3>
                        <img width="250" height="200"
                             src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1-500x333.png"
                        />
                    </div>
                    <div className="firstPartner">
                        <h3>7</h3>
                        <img width="250" height="200"
                             src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1-500x333.png"
                        />
                    </div>
                    <div className="firstPartner">
                        <h3>8</h3>
                        <img width="250" height="200"
                             src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1-500x333.png"
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}





import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnerSlider.css"

const settings = {
    dots: true,
    color: "#fff",
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
            <div className='images-container-wrapper'>
                <h2> PARTNERS </h2>
                <div className="images-container">

                    <Slider {...settings} >
                        <div className="partner-image">
                            <img alt='someImage'
                                 src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1.png"
                            />
                        </div>
                        <div className="partner-image">
                            <img alt='someImage'
                                 src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-2.png"
                            />
                        </div>
                        <div className="partner-image">
                            <img alt='someImage'
                                 src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-3.png"
                            />
                        </div>

                        <div className="partner-image">
                            <img alt='someImage'
                                 src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-4.png"
                            />
                        </div>
                        <div className="partner-image">
                            <img alt='someImage'
                                 src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-5.png"
                            />
                        </div>
                        <div className="partner-image">
                            <p><strong>Vacant position</strong></p>
                            <p>Maybe you?</p>

                        </div>

                    </Slider>
                </div>
            </div>
        );
    }
}





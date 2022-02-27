import React, { useState, useEffect, Suspense, useCallback } from "react"
import Slider from 'infinite-react-carousel';
import Card from "../Card"
import "./style.css"

const initialDefault = {
	dots: false,
	adaptiveHeight: true,
	arrows: false,
	slidesToShow: getCount()
}
function getCount() {
	const docoumentWidth = document.body["clientWidth"]
	switch (true) {
		case docoumentWidth <= 532: return 1;
		case docoumentWidth <= 767: return 2
		case docoumentWidth <= 991: return 3;
		default: return 4;
	}
}
const Carousel = ({ info = [], content }) => {
	const [settings, setSettings] = useState(initialDefault)
	useEffect(() => {
		window.addEventListener('resize', cardsCount)
		return () => {
			window.removeEventListener('resize', cardsCount)
		}
	}, []);

	const cardsCount = useCallback(() => {
		setSettings(prev => ({
			...prev,
			slidesToShow: getCount()
		}))
	}, [])
	return (
		<div className="slider " >
			<Slider {...settings} >

				{
					info.map(el =>
						<Card key={el.id} data={el} content={content} />
					)
				}

			</Slider>
		</div>

	)
}

export default Carousel
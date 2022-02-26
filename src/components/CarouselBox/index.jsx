import React from "react"
import Carousel from "../ui/Carousel"
import YouplayBox from "../ui/YouplayBox"
import style from "./style.css"

const Games = ({ info, content, title }) => {

	return (
		<div className="carousel-box" id={content}>
			{title ? <YouplayBox name={content} href={true} /> : null}
			<Carousel info={info} content={content} />
		</div>
	)
}

export default Games
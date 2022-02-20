import React from "react"
import Rating from "../../Rating"
import Price from "../Price"
import style from "./style.module.css"

const GamesContent = (props) => {
	const { name, rating, price, isDiscounted, percentOfDiscount } = props
	return (
		<div className={style['over-info']}>
			<div>
				<div>
					<h4>{name}</h4>
					<Rating rating={rating} />
					<Price
						price={price}
						isDiscounted={isDiscounted}
						percentOfDiscount={percentOfDiscount}
					/>
				</div>
			</div>
		</div>
	)
}

export default GamesContent
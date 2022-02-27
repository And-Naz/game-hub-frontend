import React from "react"
import Rating from "../../Rating"
import { useDispatch } from 'react-redux';
import {addInBag} from "../../../../store/reducers/bagReducerDuck"
import Button from '../../Button'
import Price from "../Price"
import style from "./style.module.css"

const GamesContent = ({info}) => {
	const dispatch = useDispatch()

	const { name, rating, price, isDiscounted, percentOfDiscount } = info
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
					                {
					price > 0
					?(
						<Button 
							type='button'
							buttonSize='btn-small' 
							onClick={e=>{
								e.stopPropagation()
								e.preventDefault()
								dispatch(addInBag({...info}))
							}}
						>
							Add To Cart
						</Button>
					)
					:(<Button 
						type='button'
						buttonSize='btn-small' 
					>
						Play
					</Button>)
					}
				</div>
			</div>
		</div>
	)
}

export default GamesContent
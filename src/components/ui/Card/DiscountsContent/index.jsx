import React from "react"
import Rating from "../../Rating"
import { useDispatch } from 'react-redux';
import {addInBag} from "../../../../store/reducers/bagReducerDuck"
import Button from '../../Button'
import Price from "../Price"
import style from "./style.module.css"

const DiscountsContent = ({info}) =>{
	const dispatch = useDispatch()

    const { name, rating, price, isDiscounted, percentOfDiscount } = info
    return (
        <div className={style['bottom-info']}>
            <h4>{name} </h4>
            <div className="row">
                <div className="col">
                   <Rating rating={rating}/>
                </div>
                <div className="col">
                    <Price
						price={price}
						isDiscounted={isDiscounted}
						percentOfDiscount={percentOfDiscount}
					/>
                </div>
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
    )
}

export default DiscountsContent
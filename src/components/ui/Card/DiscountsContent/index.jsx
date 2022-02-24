import React from "react"
import Rating from "../../Rating"
import Price from "../Price"
import style from "./style.module.css"

const DiscountsContent = (props) =>{
    const { name, rating, price, isDiscounted, percentOfDiscount } = props
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
            </div>
        </div>
    )
}

export default DiscountsContent
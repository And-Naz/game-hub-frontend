import React from "react"
import Rating from "../../Rating"
import Price from "../Price"
import style from "./style.css"

const DiscountsContent = (props) =>{
    const {name,rating,price,sale,saleFrom} = props
    return (
        <div className="bottom-info">
            <h4>{name} </h4>
            <div className="row">
                <div className="col">
                   <Rating rating={rating}/>
                </div>
                <div className="col">
                    <Price price={price} sale={sale} saleFrom={saleFrom}/>
                </div>
            </div>
        </div>
    )
}

export default DiscountsContent
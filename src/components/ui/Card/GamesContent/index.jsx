import React from "react"
import Rating from "../../Rating"
import Price from "../Price"
import style from "./style.css"

const GamesContent = (props) =>{
    const {name,rating,price,sale,saleFrom} = props
    return (
        <div className="over-info">
            <div>
                <div>
                    <h4>{name}</h4>
                    <Rating rating={rating} />
                    <Price price={price} sale={sale} saleFrom={saleFrom}/>
               </div>
            </div>
        </div>
    )
}

export default GamesContent
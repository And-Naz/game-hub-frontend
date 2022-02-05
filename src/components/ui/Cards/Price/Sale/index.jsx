import React from "react"
const Rating = ({saleFrom}) =>{
    return (
            <sup>
                <del>
                    <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol"
                        >$
                        </span>
                        {saleFrom}
                    </span>
                </del>
            </sup>
    )
}

export default Rating
import Sale from "./Sale"

const Rating = ({price,sale,saleFrom}) =>{
    return (
        <div className="price">
            <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">
                    $
                </span>
                {price}
            </span> 
            {sale?
                <Sale saleFrom ={saleFrom} />
            :null
            }
        </div>
    )
}

export default Rating
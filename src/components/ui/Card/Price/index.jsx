import Sale from "./Sale"

const Rating = ({price,sale,saleFrom}) =>{
    return (
        <div className="price">
            <span className="woocommerce-Price-amount amount">
            {price !== '0'?
                <>
                    <span className="woocommerce-Price-currencySymbol">
                        $
                    </span>
                    {price}
                </>
            :
            'Free'}
            </span> 
            {sale?
                <Sale saleFrom ={saleFrom} />
            :null
            }
        </div>
    )
}

export default Rating
import Sale from "./Sale"
import React from "react";

const Rating = ({ price, isDiscounted, percentOfDiscount }) => {
	return (
		<div className="price">
			<span className="woocommerce-Price-amount amount">
				{
					price !== '0'
						? (
							<>
								<span className="woocommerce-Price-currencySymbol">
									$
								</span>
								{price}
							</>
						)
						: 'Free'
				}
			</span>
			{
				isDiscounted
					? <Sale price={price} percentOfDiscount={percentOfDiscount} />
					: null
			}
		</div>
	)
}

export default Rating
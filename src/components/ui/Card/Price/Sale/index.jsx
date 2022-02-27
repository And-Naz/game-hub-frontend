import React from "react"
const Rating = ({ price, percentOfDiscount }) => {
	return (
		<sup>
			<del>
				<span className="woocommerce-Price-amount amount">
					<span className="woocommerce-Price-currencySymbol"
					>$
					</span>
					{
						(price * (100 - percentOfDiscount))
					}
				</span>
			</del>
		</sup>
	)
}

export default Rating
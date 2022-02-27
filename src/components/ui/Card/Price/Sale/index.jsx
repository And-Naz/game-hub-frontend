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
						price
					}
				</span>
			</del>
		</sup>
	)
}

export default Rating
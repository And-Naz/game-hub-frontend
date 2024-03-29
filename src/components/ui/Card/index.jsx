import { forwardRef } from 'react';
import { Link } from "react-router-dom";
import HeaderContent from "./HeaderContent"
import GamesContent from "./GamesContent"
import DiscountsContent from "./DiscountsContent"
import NewsContent from "./NewsContent"
import Image from '../Image';
import Loader from '../Loader';

import "./style.css";


const Card = forwardRef(({ data, content, ...otherProps }, ref) => {
	const { id, src, name, description, rating, author, price, isDiscounted, percentOfDiscount, imageSrc } = data
	return (
		<Link to={`/games/game/${id}`}  {...otherProps} className="card__link">
			<div className="card" ref={ref}>
				<div className="card__shape">
					<Image className="card__img" src={imageSrc} alt={`${name}_img`} />
				</div>

				{
					content === "Header" ?
						<HeaderContent name={name} />
						: null
				}
				{
					content === "Games" ?
						<GamesContent
						info={data}
						/>
						: null
				}
				{
					content === "Discounts" ?
						<DiscountsContent 
							info={data}
						/>
						: null
				}
				{
					content === "Latest News" ?
						<NewsContent rating={rating} />
						: null
				}
			</div>
		</Link>

	);
})
export default Card

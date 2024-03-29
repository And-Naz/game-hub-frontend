import React from 'react';
import { Link } from "react-router-dom";
import Tags from '../../ui/Tags';
import Button from "../../ui/Button";

import './style.css'

const NewsContent = ({ data }) => {
	const {id, title, date, gameUrl, body } = data

	return (
		<div className='news__content news-content'>
			<div className="news-content__col">
				<div className="news-content__entry-header">
					<h2 className="news-content__entry-title">
						<Link to={`/games/game/${id}`}className='news-content__link'>
							{title}
						</Link>
					</h2>
					<span className="news-content__date-box">
						<svg className="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
						<span className='news-content__date'>{date.split('T')[0]}</span>
					</span>
				</div>
				{/* <Tags tags={tags}/> */}
				<div className='news-content__entry-content description'>
					<p>{body}</p>
				</div>
				<Button children='Learn More' type='button' buttonSize='btn-medium' />
			</div>
		</div>
	);
}

export default NewsContent;

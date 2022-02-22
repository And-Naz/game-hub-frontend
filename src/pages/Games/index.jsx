import { useState, useEffect, useCallback } from 'react';
import GamesList from "../../components/GamesList"
import { useParams } from "react-router-dom";

import './style.css'

function Games({ cardsInfo }) {
	let gameInfo = [...cardsInfo]
	const params = useParams()
	const [games, setGames] = useState([])

	useEffect(() => {
		if (params.category) {

			gameInfo = gameInfo.filter(el => {
				let flag
				if (Array.isArray(el[params.category])) {
					flag = el[params.category].find(item => {
						return item.name === params.name
					})
				} else {
					flag = el[params.category].name === params.name ? el : null
				}

				if (flag) {
					return el
				}
			})
		}
		setGames(gameInfo)
	}, [params])

	return (
		<section className="games">
			<GamesList info={games} />
		</section>
	);
}

export default Games;
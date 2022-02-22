import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateGamePageGames } from "../../store/reducers/gamesReducerDuck"
import GameService from "../../services/GameService"
import GamesList from "../../components/GamesList"
import { useParams } from "react-router-dom";

import './style.css'
function getGames(state) {
	return state.games.gamePage
}
function Games({ cardsInfo }) {
	const gamesAll = useSelector(getGames)
	const dispatcher = useDispatch()
	useEffect(() => {
		GameService.all()
			.then(
				res => {
					dispatcher(updateGamePageGames(res))
				},
				console.log
			)
	}, [])
	let gameInfo = [...gamesAll]
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
			<GamesList info={gamesAll} />
		</section>
	);
}

export default Games;
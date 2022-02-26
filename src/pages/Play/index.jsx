import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addGamePageGames } from "../../store/reducers/gamesReducerDuck"
import GameService from "../../services/GameService"
import GamePLay from "../../components/GamePLay"
import './style.css'
import React from "react";

function getGames(state) {
	return state.games
}
function Play() {
	const params = useParams()
	const gamesAll = useSelector(getGames)
	const [game, setGame] = useState(null)
	const dispatcher = useDispatch()

	useEffect(() => {
		console.log(params);
		const necessaryGameFromHomePage = gamesAll.homePage.find(g => (g.id).toString() === params.id)
		if (necessaryGameFromHomePage) {
			return setGame(necessaryGameFromHomePage)
		}
		const necessaryGameFromGamePage = gamesAll.gamePage.find(g => (g.id).toString() === params.id)
		if (necessaryGameFromGamePage) {
			return setGame(necessaryGameFromGamePage)
		}
		(async () => {
			try {
				const response = await GameService.getGame(params.id)
				await dispatcher(addGamePageGames(response))
				// await setGame(response)
			} catch (error) {
				alert("Game doesn't exist.")
			}
		})()
	}, [])

	return (
		<section className="games">
			{game ? <GamePLay info={game} similarGames={gamesAll.homePage} content={"Similar Games"} params={params} /> : null}
		</section>
	);
}

export default Play;
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateGamePageGames } from "../../store/reducers/gamesReducerDuck"
import GameService from "../../services/GameService"
import GamePLay from "../../components/GamePLay"
import './style.css'

function getGames(state) {
	return state.games.gamePage
}
function Play() {
	const gamesAll = useSelector(getGames)
	const dispatcher = useDispatch()
	const [game, setGame] = useState(null)
	const params = useParams()
	useEffect(() => {
		GameService.all()
			.then(
				res => {
					dispatcher(updateGamePageGames(res))
				},
				console.log
			)
	}, [])
	
	// const gameInfo = [...gamesAll]
	useEffect(() => {
		if (gamesAll[params.id - 1]) {
			setGame(gamesAll[params.id - 1])
		}
	}, [params])

	return (
		<section className="games">
			{game ? <GamePLay info={game} similarGames={gamesAll} content={"Similar Games"} params={params} /> : null}
		</section>
	);
}

export default Play;
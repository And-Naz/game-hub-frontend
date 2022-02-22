import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import GamePLay from "../../components/GamePLay"
import './style.css'

function Play({ gamesInfo = [] }) {
	const gameInfo = [...gamesInfo]
	const params = useParams()
	const [game, setGame] = useState(null)
	useEffect(() => {
		if (gameInfo[params.id - 1]) {
			setGame(gameInfo[params.id - 1])
		}
	}, [params])

	return (
		<section className="games">
			{game ? <GamePLay info={game} similarGames={gamesInfo} content={"Similar Games"} params={params} /> : null}
		</section>
	);
}

export default Play;
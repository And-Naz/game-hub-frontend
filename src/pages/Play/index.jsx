import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addGamePageGames,updateHomePageGames } from "../../store/reducers/gamesReducerDuck"
import GameService from "../../services/GameService"
import GamePLay from "../../components/GamePLay"
import './style.css'

function getGames(state) {
	return state.games
}
function Play() {
	const params = useParams()
	const gamesAll = useSelector(getGames)
	const [game, setGame] = useState({})
	const dispatcher = useDispatch()

	useEffect(() => {
		(async () => {
			const necessaryGameFromHomePage = gamesAll.homePage.find(g => (g.id).toString() === params.id)
			if (necessaryGameFromHomePage) {
				setGame(necessaryGameFromHomePage)
			}else{
				await GameService.gameForHomePage()
							.then(
								res => {
									dispatcher(updateHomePageGames(res))
								},
								console.log
							)
				const necessaryGameFromGamePage = gamesAll.gamePage.find(g => (g.id).toString() === params.id)
				if(necessaryGameFromGamePage){
					setGame(necessaryGameFromGamePage)
				}else{
						try {
							const response = await GameService.getGame(params.id)
											await dispatcher(addGamePageGames(response))
											await setGame(response)
						} catch (error) {
							alert("Game doesn't exist.")
						}
				}
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
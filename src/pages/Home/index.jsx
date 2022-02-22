import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateHomePageGames } from "../../store/reducers/gamesReducerDuck"
import GameService from "../../services/GameService"
import Image from "../../components/ui/Image";
import Button from "../../components/ui/Button";
import CarouselBox from '../../components/CarouselBox'
import NewsBox from '../../components/NewsBox'
import './home.css'

function getGames(state) {
	return state.games.homePage
}

function Home() {
	const games = useSelector(getGames)
	const dispatcher = useDispatch()
	useEffect(() => {
		GameService.all({ limit: 4 })
			.then(
				res => {
					dispatcher(updateHomePageGames(res))
				},
				console.log
			)
	}, [])
	return (
		<>
			<section className="page">
				<div className='img-container'>
					<Image className='img-background' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/banner-bg.jpg" alt="home" />
				</div>
				<div className='info-container'>
					<h1 className='info__header'>
						Clan War:
						<br />
						Global Esports Cup
					</h1>
					<p className='info__paragraph'><strong>Virtus PRO</strong> vs <strong>Team Secret</strong></p>
					<Button children='Learn More' type='button' buttonSize='btn-large' />
				</div>
				<div className="page__carousel">
					{
						!!games.length && (<CarouselBox info={games} content={"Header"} title={false} />)
					}
				</div>
			</section>
			<section className="games">
				{
					// !!games.length && (<CarouselBox info={games} content={"Games"} title={true} />)
				}
			</section>
			<section className="discounts">
				{
					// !!games.length && (<CarouselBox info={games} content={"Discounts"} title={true} />)
				}
			</section>
			<section className="latest-news">
				{
					// !!games.length && (<NewsBox info={games} content={"Latest News"} title={true} />)
				}
			</section>
		</>

	);
}



export default Home;
import Image from "../../components/ui/Image";
import Button from "../../components/ui/Button";
import api from "../../api"
import CarouselBox from '../../components/CarouselBox'
import NewsBox from '../../components/NewsBox'
import './home.css'

function Home({ cardsInfo }) {
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
					<CarouselBox info={cardsInfo} content={"Header"} title={false} />
				</div>
			</section>
			<section className="games">
				<CarouselBox info={cardsInfo} content={"Games"} title={true} />
			</section>
			<section className="discounts">
				<CarouselBox info={cardsInfo} content={"Discounts"} title={true} />
			</section>
			<section className="latest-news">
				<NewsBox info={cardsInfo} content={"Latest News"} title={true} />
			</section>
		</>

	);
}



export default Home;
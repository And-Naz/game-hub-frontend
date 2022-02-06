import Image from "../../components/ui/Image";
import Button from "../../components/ui/Button";
import './home.css'

function Home() {
	return (
		<section>
			<div className='img-container'>
				<Image className='img-background' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/banner-bg.jpg" alt="home" />
				<div className='color-overlay'></div>
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
		</section>
	);
}



export default Home;
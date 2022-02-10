import Image from "../../components/ui/Image";
import Button from "../../components/ui/Button";
import api from "../../api"
import './home.css'

console.log(api);
console.log(api.getHome());

function Home() {
	return (
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
		</section>
	);
}



export default Home;
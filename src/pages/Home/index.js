import Image from "../../components/ui/Image";
import Button from "../../components/ui/Button";
import ImageSrc from "../../assets/images/1400x775.jpg"
import './home.css'

function Home() {
	return (
		<section className='content-wrap'>
			<div className='youplay-banner-parallax youplay-banner youplay-banner-id-1 mid banner-top'>
				<div className='image'>
					<div className="jarallax-container-2">
						<Image className='jarallax-img' src={ImageSrc} alt="home" />
					</div>
				</div>
				<div className='info'>
					<div className='container'>
						<h2>
							Clan War:
							<br />
							Global Esports Cup
						</h2>
						<p>
							<strong>Virtus PRO</strong> vs <strong>Team Secret</strong>
						</p>
						<Button children='Learn More' />
					</div>
				</div>
			</div>
		</section>
	);
}



export default Home;
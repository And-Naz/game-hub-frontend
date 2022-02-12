import Card from "./card";
import male from '../../assets/images/male_avatar.png'
import female from '../../assets/images/female_avatar.png'

function About() {
	return (
		<section className='about'>
			<div className='about__info'>
				<h1 className='about__header'>About Us and Our Project</h1>
				<p>GameHub is a great all-around gaming site with a bit of everything.
					Will be published articles regularly, with lots of news posts, reviews, and features appearing each week. This includes updates on certain games,
					previews of upcoming games, and opinion pieces. You'll find popular and recent games, along with tabs to filter by your favorite game systems.
					We tried to create a site where you can play and relax a bit․ This is not the end․․․
				</p>
			</div>
			<div className="cards">
				<Card name='Andranik Nazaryan'
					  prof='Programmer'
					  gender={male}>
					Lorem Ipsum is simply dummy text of the printing.
				</Card>
				<Card name='Vardan Petrosyan'
					  prof='Programmer'
					  gender={male}>
					Lorem Ipsum is simply dummy text of the printing.
				</Card>
				<Card name='Hasmik Margaryan'
					  prof='Schematic Engineer'
					  gender={female}>
					Huge fan of Harry Potter. Future React JS developer.
				</Card>
				<Card name='Aram Baghdasaryan'
					  prof='Pharmacist'
					  gender={male}>
					Lorem Ipsum is simply dummy text of the printing.
				</Card>
			</div>
		</section>
	);
}

export default About;
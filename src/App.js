import logo from './logo.svg';
import './App.css';
import CarouselBox from './components/CarouselBox';
import NewsBox from './components/NewsBox';
const cardsInfo = [{
    id:1,
    name:'assasins',
	price:'12.00',
	saleFrom:'27.0',
	rating:"37",
	sale:false,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
},
{
    id:2,
	name:'assasins',
	price:'11.00',
	saleFrom:'27.0',
	rating:"37",
	sale:true,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',

},
{
    id:3,
	name:'assasins',
	price:'11.00',
	saleFrom:'27.0',
	rating:"37",
	sale:true,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',

},
{
    id:4,
	name:'assasins',
	price:'11.00',
	saleFrom:'27.0',
	rating:"37",
	sale:true,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',

},
{
    id:5,
	name:'assasins',
	price:'11.00',
	saleFrom:'27.0',
	rating:"37",
	sale:true,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
}]
const newsInfo = [{
    id:1,
    name:'Bloodborne – First Try!',
    description:'Jackson Isai? Tu quoque … A te quidem a ante. Vos scitis quod blinking res Ive ‘been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et … sunt occidat. Videtur quod est super omne oppidum. […]',
	rating:"37",
	Genres:['Shooter','action'],
	Features:['Co-op','Multiplayer'],
	tags:[{
		id:1,
		name:'Bloodborne',
		url:'/bloodborne'
	},
	{
		id:2,
		name:'first try',
		url:'/first-try'

	}, 
	{
		id:3,
		name:'first boss problem',
		url:'/first-boss-problem'

	},  
	],
	sale:false,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
    date:'21st March 2015'
},
{
    id:2,
    name:'Bloodborne – First Try!',
    description:'Jackson Isai? Tu quoque … A te quidem a ante. Vos scitis quod blinking res Ive ‘been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et … sunt occidat. Videtur quod est super omne oppidum. […]',
	rating:"37",
	Genres:['Shooter','action'],
	Features:['Co-op','Multiplayer'],
	tags:[{
			id:1,
			name:'Bloodborne'
		},
		{
			id:2,
			name:'first try'
		}, 
		{
			id:3,
			name:'first boss problem'
		},  
	],
	sale:false,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
    date:'21st March 2015'
}]
function App() {
	return (
		<div className="App">
			<CarouselBox info={cardsInfo} content={"Header"}/>
			<CarouselBox info={cardsInfo} content={"Games"}/>
			<CarouselBox info={cardsInfo} content={"Discounts"}/>
			<NewsBox info={newsInfo} content={"Latest News"} />
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;

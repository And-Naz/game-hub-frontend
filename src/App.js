import logo from './logo.svg';
import './App.css';
// import Cards from "./components/ui/Cards"
import CarouselBox from './components/CarouselBox';
const cardsInfo = [{
    id:1,
    name:'assasins',
	price:'12.00',
	saleFrom:'27.0',
	rating:"37%",
	sale:false,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
},
{
    id:2,
	name:'assasins',
	price:'11.00',
	saleFrom:'27.0',
	rating:"37%",
	sale:true,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',

},
{
    id:3,
	name:'assasins',
	price:'11.00',
	saleFrom:'27.0',
	rating:"37%",
	sale:true,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',

},
{
    id:4,
	name:'assasins',
	price:'11.00',
	saleFrom:'27.0',
	rating:"37%",
	sale:true,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',

},
{
    id:5,
	name:'assasins',
	price:'11.00',
	saleFrom:'27.0',
	rating:"37%",
	sale:true,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
}]

function App() {
	return (
		<div className="App">
			<CarouselBox info={cardsInfo} page={"Header"}/>
			<CarouselBox info={cardsInfo} page={"Games"}/>
			<CarouselBox info={cardsInfo} page={"Discounts"}/>

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

import logo from './logo.svg';
import './App.css';
import Cards from "./components/ui/Cards"
const cardsInfo = [{
    id:1,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
    name:'assasins',
},
{
    id:2,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
    name:'assasins',

},
{
    id:3,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
    name:'assasins',

},
{
    id:4,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
    name:'assasins',

},
{
    id:5,
    url:'https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg',
    gameUrl:'/assasins',
    name:'assasins',
}]
function App() {
	return (
		<div className="App">
			<Cards info = {cardsInfo}/>	
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

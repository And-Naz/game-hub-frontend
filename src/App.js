import {Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home";
import GameList from "./components/Pages/GameList";
import Score from "./components/Pages/Score";
import News from "./components/Pages/News";
import About from "./components/Pages/About";

import './App.css';
import Header from "./components/Header";


function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='' element={<Home />}/>
				<Route path='gameList' element={<GameList />}/>
				<Route path='score' element={<Score />}/>
				<Route path='news' element={<News />}/>
				<Route path='about' element={<About />}/>
			</Routes>


		</>

);
}





export default App;

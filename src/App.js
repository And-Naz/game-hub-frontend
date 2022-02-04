import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Games from "./components/Pages/Games";
import Score from "./components/Pages/Score";
import News from "./components/Pages/News";
import About from "./components/Pages/About";

import './App.css';



function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='' element={<Home />}/>
				<Route path='games' element={<Games />}/>
				<Route path='score' element={<Score />}/>
				<Route path='news' element={<News />}/>
				<Route path='about' element={<About />}/>
			</Routes>
		</>

);
}





export default App;

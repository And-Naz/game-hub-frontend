import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import Score from "./Pages/Score";
import News from "./Pages/News";
import About from "./Pages/About";
import './assets/css/App.css';



function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='' element={<Home />} />
				<Route path='games' element={<Games />} />
				<Route path='score' element={<Score />} />
				<Route path='news' element={<News />} />
				<Route path='about' element={<About />} />
			</Routes>
		</>

	);
}





export default App;

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Score from "./pages/Score";
import News from "./pages/News";
import About from "./pages/About";
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

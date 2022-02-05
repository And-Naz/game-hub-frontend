import React, { Suspense } from 'react'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import './App.css';
const Home = React.lazy(() => import("./components/Pages/Home"))
const Games = React.lazy(() => import("./components/Pages/Games"))
const Score = React.lazy(() => import("./components/Pages/Score"))
const News = React.lazy(() => import("./components/Pages/News"))
const About = React.lazy(() => import("./components/Pages/About"))


function App() {
	return (
		<>
			<Header />
			<Suspense fallback={<div>Page is loading...</div>}>
				<Routes>
					<Route path='/' element={<Home />}/>
					<Route path='games' element={<Games />}/>
					<Route path='score' element={<Score />}/>
					<Route path='news' element={<News />}/>
					<Route path='about' element={<About />}/>
				</Routes>
			</Suspense>
		</>
);
}





export default App;

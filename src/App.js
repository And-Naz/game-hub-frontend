import { Suspense } from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import pages from "./pages"
import './assets/css/App.css';
import Footer from "./components/Footer/Footer";
import Social from "./components/Social";

function App() {
	return (
		<div className="App">

			<Social />
			<Footer />
			<FooterC/>
		</div>
	);
}

export default App;

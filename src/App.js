import { Suspense } from "react"
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Pages from "./pages"
import useAuth from "./hooks/useAuth";
import './assets/css/App.css';

function App() {
	const { checkAuth } = useAuth()
	useEffect(() => {
		checkAuth()
	}, [])
	return (
		<>
			<Header />
			<main className="page-wrapper">
				<Pages />
			</main>
		</>
	);
}

export default App;

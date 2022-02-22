import React, {Suspense, useEffect} from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import pages from "./pages"
import useAuth from "./hooks/useAuth";
import './assets/css/App.css';
import Footer from "./components/Footer/Footer";
import ShoppingCard from './components/ShoppingCard';
import Loader from "./components/ui/Loader";
function App() {
	const { checkAuth } = useAuth()
	useEffect(() => {
		checkAuth()
	}, [])
	return (
		<>
			<Header />
			<main className="page-wrapper">
				<Suspense fallback={<Loader/>}>
					<Routes>
						{
							pages.map(({ path, component }) => {
								return (
									<Route key={path} path={path} element={component} />
								)
							})
						}
					</Routes>
				</Suspense>
			</main>
			<Footer />
		</>
	);
}

export default App;
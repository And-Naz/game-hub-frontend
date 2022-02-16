import { Suspense } from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import pages from "./pages"
import './assets/css/App.css';
function App() {
	return (
		<>
			<Header />
			<main className="page-wrapper">
				<Suspense fallback={<div>Loading...</div>}>
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
		</>

	);
}





export default App;

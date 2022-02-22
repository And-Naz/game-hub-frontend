import { lazy, Suspense } from "react"
import { Navigate, Routes, Route } from "react-router-dom"
import Loader from '../components/ui/Loader'
import { GAMES_INFO } from '../constants/GamesInfo'
const Home = lazy(() => import('./Home'))
const Games = lazy(() => import('./Games'))
const Play = lazy(() => import('./Play'))
const Score = lazy(() => import('./Score'))
const News = lazy(() => import('./News'))
const About = lazy(() => import('./About'))
const NotFount = lazy(() => import('./NotFount'))

const pageWithoutAuth = () => {
	const pages = new Map()
	pages.set("", <Home />)
	pages.set("/home", <Navigate to="" replace />)
	pages.set("/games", <Games cardsInfo={GAMES_INFO} />)
	pages.set("/games/filter/:category/:name/", <Games cardsInfo={GAMES_INFO} />)
	pages.set("/games/game/:id", <Play gamesInfo={GAMES_INFO} />)
	pages.set("/games/game/:id/:screen", <Play gamesInfo={GAMES_INFO} />)
	pages.set("/score", <Score />)
	pages.set("/news", <News />)
	pages.set("/about", <About />)
	pages.set("*", <NotFount />)
	return pages
}
const pageWithAuth = () => {
	const pages = pageWithoutAuth()
	/* here we can add auth routes */
	return pages
}
const routeGenerator = routes => {
	return [...routes].reduce((acc, [path, component]) => {
		acc.push({ path, component })
		return acc
	}, [])
}
const createRoutes = isAuthenticated => {
	return routeGenerator(isAuthenticated ? pageWithAuth() : pageWithoutAuth())
}
export default function AppRoutes() {
	const routes = createRoutes(false)
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{
					routes.map(({ path, component }) => {
						return (
							<Route key={path} path={path} element={component} />
						)
					})
				}
			</Routes>
		</Suspense>
	)
};
import { lazy, Suspense } from "react"
import { Navigate, Routes, Route } from "react-router-dom"
import Loader from '../components/ui/Loader'
import { useSelector } from "react-redux"
import { useMemo } from "react"

const Home = lazy(() => import('./Home'))
const Games = lazy(() => import('./Games'))
const Play = lazy(() => import('./Play'))
const News = lazy(() => import('./News'))
const About = lazy(() => import('./About'))
const NotFount = lazy(() => import('./NotFount'))
const UserPage = lazy(() => import('./UserPage'))

const pageWithoutAuth = () => {
	const pages = new Map()
	pages.set("", <Home />)
	pages.set("/home", <Navigate to="" replace />)
	pages.set("/games", <Games />)
	pages.set("/games/filter/:category/:name/", <Games />)
	pages.set("/games/game/:id", <Play />)
	pages.set("/games/game/:id/:screen", <Play />)
	pages.set("/news", <News />)
	pages.set("/about", <About />)
	pages.set("*", <NotFount />)
	return pages
}
const pageWithAuth = () => {
	const pages = pageWithoutAuth()
	pages.set("/profile", <UserPage />)
	return pages
}
const createRoutes = isAuth => {
	const pages = isAuth ? pageWithAuth() : pageWithoutAuth();
	return [...pages].reduce((acc, [path, component]) => {
		acc.push({ path, component })
		return acc
	}, [])
}

const getIsAuth = state => state.auth.isAuth;

export default function AppRoutes() {
	const isAuth = useSelector(getIsAuth)
	const routes = useMemo(() => createRoutes(isAuth), [isAuth])
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
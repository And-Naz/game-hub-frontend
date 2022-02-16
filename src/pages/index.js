import { lazy } from "react"
const Home = lazy(() => import('./Home'))
const Games = lazy(() => import('./Games'))
const Score = lazy(() => import('./Score'))
const News = lazy(() => import('./News'))
const About = lazy(() => import('./About'))
const NotFount = lazy(() => import('./NotFount'))

const pages = [
	{
		path: "",
		component: <Home />,
	},
	{
		path: "/home",
		component: <Home />,
	},
	{
		path: "/games",
		component: <Games />,
	},
	{
		path: "/score",
		component: <Score />,
	},
	{
		path: "/news",
		component: <News />,
	},
	{
		path: "/about",
		component: <About />,
	},
	{
		path: "*",
		component: <NotFount />,
	}
]

export default pages;
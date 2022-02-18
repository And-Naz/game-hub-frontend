import { lazy } from "react"
import  {GAMES_INFO} from '../constants/GamesInfo'
const Home = lazy(() => import('./Home'))
const Games = lazy(() => import('./Games'))
const Play = lazy(() => import('./Play'))
const Score = lazy(() => import('./Score'))
const News = lazy(() => import('./News'))
const About = lazy(() => import('./About'))
const NotFount = lazy(() => import('./NotFount'))
const pages = [
	{
		path: "",
		component: <Home cardsInfo = {GAMES_INFO}/>,
	},
	{
		path: "/home",
		component: <Home cardsInfo = {GAMES_INFO}/>,
	},
	{
		path: "/games",
		component: <Games cardsInfo = {GAMES_INFO}/>,
	},
	{
		path: "/games/filter/:category/:name/",
		component: <Games cardsInfo = {GAMES_INFO}/>,
	},
	{
		path: "/games/game/:id",
		component: <Play gamesInfo = {GAMES_INFO}/>,
	},
	{
		path: "/games/game/:id/:screen",
		component: <Play gamesInfo = {GAMES_INFO}/>,
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
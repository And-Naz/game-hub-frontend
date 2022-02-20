import { Asynchronous, Synchronous } from "./ActionCreatorFactory"
import imgSrc from "../assets/images/300x200.jpg"
// import Shareds from '../assets/games-img/shareds.jpg'
// import FieldsOfFuryio from '../assets/games-img/fieldsoffuryio.jpg'
// import Snake from '../assets/games-img/snake.jpg'
// import BattleTanksIo from '../assets/games-img/battle-tanks-io.jpg'

// Actions
const UPDATE_HOME_PAGE_GAMES = 'authReducer/UPDATE_HOME_GAMES';


// Default State
const defaultState = {
	homePage: [],
	gamePage: []
}

// Reducer
export default function authReducer(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case UPDATE_HOME_PAGE_GAMES: {
			return { ...state, homePage: [...payload] }
		}
		default: return state;
	}
}

// Action Creators
export const updateHomePageGames = Asynchronous(UPDATE_HOME_PAGE_GAMES)
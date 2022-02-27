import { Asynchronous, Synchronous } from "../ActionCreatorFactory"
import imgSrc from "../../assets/images/300x200.jpg"
// import Shareds from '../assets/games-img/shareds.jpg'
// import FieldsOfFuryio from '../assets/games-img/fieldsoffuryio.jpg'
// import Snake from '../assets/games-img/snake.jpg'
// import BattleTanksIo from '../assets/games-img/battle-tanks-io.jpg'

// Actions
const UPDATE_HOME_PAGE_GAMES = 'gamesReducer/UPDATE_HOME_PAGE_GAMES';
const UPDATE_GAME_PAGE_GAMES = 'gamesReducer/UPDATE_GAME_PAGE_GAMES';
const ADD_GAME_PAGE_GAMES = 'gamesReducer/ADD_GAME_PAGE_GAMES';


// Default State
const defaultState = {
	homePage: [],
	gamePage: []
}

// Reducer
export default function gamesReducer(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case UPDATE_HOME_PAGE_GAMES: {
			return { ...state, homePage: [...payload] }
		}
		case UPDATE_GAME_PAGE_GAMES: {
			return { ...state, gamePage: [...payload] }
		}
		case ADD_GAME_PAGE_GAMES: {
			return { ...state, homePage: state.homePage.concat(payload) }
		}
		default: return state;
	}
}

// Action Creators
export const updateHomePageGames = Asynchronous(UPDATE_HOME_PAGE_GAMES)
export const updateGamePageGames = Asynchronous(UPDATE_GAME_PAGE_GAMES)
export const addGamePageGames = Asynchronous(ADD_GAME_PAGE_GAMES)
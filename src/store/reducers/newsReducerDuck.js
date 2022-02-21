import { Asynchronous, Synchronous } from "../ActionCreatorFactory"

// Actions
const UPDATE_HOME_PAGE_NEWS = 'newsReducer/UPDATE_HOME_PAGE_NEWS';


// Default State
const defaultState = {
	homePage: [],
	newsPage: []
}

// Reducer
export default function newsReducer(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case UPDATE_HOME_PAGE_NEWS: {
			return { ...state, homePage: [...payload] }
		}
		default: return state;
	}
}

// Action Creators
export const updateHomePageNews = Asynchronous(UPDATE_HOME_PAGE_NEWS)
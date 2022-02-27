import { Asynchronous, Synchronous } from "../ActionCreatorFactory"

// Actions
const UPDATE_HOME_PAGE_NEWS = 'newsReducer/UPDATE_HOME_PAGE_NEWS';
const UPDATE_NEWS_PAGE = 'newsReducer/UPDATE_NEWS_PAGE';


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
		case UPDATE_NEWS_PAGE: {
			return { ...state, newsPage: [...payload] }
		}
		default: return state;
	}
}

// Action Creators
export const updateHomePageNews = Asynchronous(UPDATE_HOME_PAGE_NEWS)
export const updateNewsPage = Asynchronous(UPDATE_NEWS_PAGE)
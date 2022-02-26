import { Asynchronous, Synchronous } from "../ActionCreatorFactory"

// Actions
const UPDATE_DEVELOPERS = 'aboutReducer/UPDATE_DEVELOPERS';


// Default State
const defaultState = {
	developers: []
}

// Reducer
export default function aboutReducer(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case UPDATE_DEVELOPERS: {
			return { ...state, developers: [...payload] }
		}
		default: return state;
	}
}

// Action Creators
export const updateDevelopers = Asynchronous(UPDATE_DEVELOPERS)
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducerDuck from "./authReducerDuck"
import gamesReducerDuck from './gamesReducerDuck'

const rootReducer = combineReducers({
	auth: authReducerDuck,
	games: gamesReducerDuck
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducerDuck from "./reducers/authReducerDuck"
import gamesReducerDuck from './reducers/gamesReducerDuck'
import newsReducerDuck from './reducers/newsReducerDuck'
import aboutReducerDuck from './reducers/aboutReducerDuck'

const rootReducer = combineReducers({
	auth: authReducerDuck,
	games: gamesReducerDuck,
	news: newsReducerDuck,
	about: aboutReducerDuck
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
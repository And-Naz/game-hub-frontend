import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducerDuck from "./authReducerDuck"
import gamesInfoReducerDuck from './gamesInfoReducerDuck'
import bagReducer from "./bagReducer";

const rootReducer = combineReducers({
	auth: authReducerDuck,
	gamesInfo: gamesInfoReducerDuck,
	bag: bagReducer

})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
import { Asynchronous, Synchronous } from "../ActionCreatorFactory"

// Actions
const ADD_IN_BAG = 'bagReducerDuck/ADD_IN_BAG';
const REMOVE_FROM_BAG = 'bagReducerDuck/REMOVE_FROM_BAG';


// Default State
const defaultState = [
	{
		"id": 4,
		"src": "https://www.addictinggames.com/embed/html5-games/25075",
		"name": "Field Of Fury!",
		"description": "Pulitzer Prize award-winning historian James M. McPherson has written for young readers a stirring account of the greatest conflict to happen on our nation's soil, the Civil War, bringing to life the tragic struggle that divided not only a nation, but also friends and family. From the initial Confederate attack on Fort Sumter, to the devastating loss of life at Shiloh as Ulysses S. Grant led the Union to unexpected victory, to the brilliance of Stonewall Jackson's campaign at Shenandoah, to General Pickett's famous charge at Gettysburg, to the Union's triumph at Appo-mattox Court House, Fields of Fury details the war that helped shape us as a nation.Also included are personal anecdotes from the soldiers at the battlefront and the civilians at home, as well as profiles of historical luminaries such as Robert E. Lee, Abraham Lincoln, Jefferson Davis, and Ulysses S. Grant. McPherson also explores the varied roles that women played during the war, healthcare on the battlefield, and the demise of slavery.McPherson's narrative is highlighted with black-and-white photographs taken by Civil War photographers Mathew Brady and Timothy O'Sullivan, period oil paintings, and key campaign and battlefield maps, that make Fields of Fury the consummate book on the American Civil War for kids. (less)",
		"rating": 70,
		"author": "Vardan-Petrosyan",
		"price": 27,
		"isDiscounted": true,
		"percentOfDiscount": 44,
		"imageSrc": "http://localhost:5000/api/static/images/fieldsoffuryio.jpg"
	}
]

// Reducer
export default function bagReducerDuck(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case ADD_IN_BAG: {
			return state.concat(payload)
		};
		case REMOVE_FROM_BAG: {
			return state.filter(gameObj => gameObj.id !== payload)
		};
		default: return state;
	}
}

// Action Creators
export const addInBag = Synchronous(ADD_IN_BAG)
export const removeFromBag = Synchronous(REMOVE_FROM_BAG)
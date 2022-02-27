import { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { removeFromBag } from "../../store/reducers/bagReducerDuck";
import Button from '../ui/Button';
import './style.css'

const getBag = state => state.bag
function pay() {
	alert("You successfully paid")
}

function getPrice(gameObj) {
	if (!gameObj.isDiscounted) {
		return gameObj.price
	}
	return gameObj.price * (100 - gameObj.percentOfDiscount) / 100
}

function getTotalPrice(gameObjArr = []) {
	return gameObjArr.reduce((acc, gameObj) => {
		return (acc + getPrice(gameObj))
	}, 0)
}

function ShoppingCard({ toggleForm }) {
	const dispatch = useDispatch();
	const bag = useSelector(getBag)
	const removeGame = useCallback((event) => {
		const id = Number(event.target.dataset.game)
		if (Number.isNaN(id)) { return }
		dispatch(removeFromBag(id))
	}, [dispatch])
	return (
		<div className="game__list">
			<ul className="game__list__container">
				{bag.map((item) => (
					<li key={item.id} className="game__list__element">
						<div className="game__list__info">
							<h4 className="game__list__title">{item.name}</h4>
							<p className="game__list__desc">{item.description.slice(0, 100)}</p>
						</div>
						<div className="game__list__controls">
							<span className="game__list__price">
								Price: {getPrice(item)}
							</span>
							<Button
								buttonSize="btn-small"
								data-game={item.id}
								onClick={removeGame}
							>
								Remove
							</Button>
						</div>
					</li>
				))}
			</ul>
			<div className="game__list__total">
				<span className="game__list__total__price">Total: {getTotalPrice(bag)} $</span>
				<Button buttonSize="btn-small" onClick={pay}>Checkout</Button>
			</div>
		</div>
	)
}

export default ShoppingCard
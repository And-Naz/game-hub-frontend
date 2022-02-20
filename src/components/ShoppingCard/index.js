import React from "react";
import {useEffect, useState} from "react";


const props = {
    price: 100,
    coins: 300,
    description: {
        name: "Snake",

    }
}

const ShoppingCard = (props) => {

    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(100);
    const [coins, setCoins] = useState(300);
    // const [amount, setAmount] = useState(1000)

    const payAll = (coins, price) => {
        coins >= totalPrice(count, price) ?
            setCoins(coins - price) :
            alert("You havn't enough coins, pls charge your account!")
        return setCoins(coins)


    }

    const totalPrice = (count, price) => {
        return count * price;
    }

    useEffect(() => {
        if (count > 0 && totalPrice(count, price) <= coins) {
            payAll(coins, price);
        }
        totalPrice(count, price)
    }, [coins, price, count])

    return (


        <div className="card-wrapper">
            <p className='card-icon'>
                Bag
            </p>
            <p className="card-count">Games in bag {count}</p>

            <span className="card-coins">Available: {coins} coins</span>
            <p>Total: {totalPrice(coins, price)} </p>

            <button className='buy-button'
                    onClick={payAll}
            >
                Buy
            </button>


        </div>


    )

}

export default ShoppingCard
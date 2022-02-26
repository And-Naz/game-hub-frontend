import {useState} from 'react';
import Button from "../ui/Button";
import useAuth from '../../hooks/useAuth';
import './style.css'
import React from "react";
import {useSelector, useDispatch} from "react-redux"
import {deleteItem, setBag, addToBag} from "../../store/bagReducer";


function ShoppingCard({toggleForm}) {
    const dispatch = useDispatch();
    const {isOpen, bagData} = useSelector(state => state.bag)
    const {totalPrice, setTotalPrice} = useSelector(state => state.bag.bagData.reduce(
        function(acc, item) {return acc + item.price
        } ,0))
    // const gameInfo = useSelector(state => state.gamesInfo)
    // console.log(isOpen)
    console.log(bagData)


    function pay() {
       alert("You successfully paid")
    }

    return (
        isOpen
            ? <div className="bag-wrapper">
                {bagData.map((item) => (
                    <div key={item.id} className="styles--sc-card">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAqCAQAAACuTUt8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmAgYJEg+0+AhOAAAEq0lEQVRYw8WYXWwUVRiGn91OSytQoWUrtrRFRPorBEKpQDClGhMIgmgEQauJBg1GRY2GKCZgooImJFwYQyBIxR/SCy/8izEaAVsBgVh+klagRAGLWprSUqmFLvt6sdNhZndmdltA33Oxc873nu893znfOXNmA8IVmVRzJ8WMIIDBJdo5wUH2chyPDiYMiqlgIuMJkUYv3bRyhHoauezKV3wZppVqkRu69IOe12i59QqoQut0QN0u/Xq1W/PdegXigilnO+W+EXZSy2HCXEYESCWDTELMYDoB335bWE2rf/Rl+kPXD39qllPPKZ6h/ddRXJLaVWZXDDqm4lmmcn2RzXt2TfvaF/MjWTZqL1/yOUfpYSSTWcTMpEVOUcdOWoE8ZrOYfIf1UT50W/uPHNO0Q+UxebFAp5KY3rBWyXD0y9RaXbYx9ioQv/a36YKN8rEMIUNLtFxP6mnlC6FCNSUUv18lWq+NmusYwiOOAVTGy7/sGF+GEBqqk2bLHJM1SV2+8s9poSLm8xrHAFbZWKvj5ett5tlm2w36NUYerfER369cnbZqvSq1yQ/RIctSH5v5E2w5v5sdBJlAEUWkmm35FFBGCNjG354pt5nhjLFqQyix2S5Saz1XUuZMvSdsMbwplKM2SX3WRIbVJ+l1IbTbI/aISpSj87aWO4TGqkTpQmiyzfKKM/rZtnGeAAKkAIZ1jKZggMk+6RF7F+20sdmqf8Iv1HGMJn5iOnCGTss2P/pjAJBOpc1N9N3kfX5HPNsFrOQ0S0nlM95gK4sAmEgdk+i1vS2nUEJzv3wRt9rcFAIRziIiZJvDiBDBMIXzPOQzyaGdMBvYYPIWWLZ8qtlHplVPo4rm/umc5oh1FnCWqeRTQZfZ9irjKOddIJfbPeQNZjjqqWZwmLM5nRRbvQowU2+LI4UuaYqZkNnqMNsetjbQCp+NtyvmnPzOsnRonL51cFuU3r/vf45x80WcfI3ZUqDffY+dxx3yE3RQktSpe/RQDDOs8qh8nmOzRLFOCKXpXj2oB7RYBebp/b380aUqxwCG6i7NU4YqXU7LpVH5aldHtcqOmcqJ2qfEOB8zAwjVuAQovROVf8HD0Rm9pRnKVZbGaq62qScJ8Sj2aJlKFVJIpVqmPR6sr6LytT6OIupW+wCEr6BP53ROfT6MJqUYQDHeCDCMYQwGBiMSMEYzKsjNFAzK/dVjJDcFucVxwfpvkRukmCH/m/xow3fl3dHGUY5zmrNc4CIileGEKKCIsoTrHSdfOAB6F9upo9F6E8RiFNW8REXS/kJoV9Jb6WsVun7dOYuht5P2+D7mqZwY669cjxOWFUn6/BQdS4r4WtLS0fJiUl6/wbrL+mHtAMURWpuE3wZ0IiGpbhDiCNUllg/yT4LsPMLyAW/NKJ7icALGuSBtvoQOaugYpHwnj/GXL6M1SLOPuZclHBqkOMBB7uY3H3sLus/x8WfHRS0c5Krby3g1e679LJSmva6m85p3DcQRGuNxtjRErxtzXEwtqrhG4gjluN54FvTfdJ9R2NYc1iZlXUNxhG7UBzHia8SVP9ZKqaGKPHpoYCMHriLdvDGTGqaRTQ+NbGInwL8nHHtWxN6aDgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMi0wNlQwOToxNzo0OSswMDowMLD8RR8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDItMDZUMDk6MTc6NDkrMDA6MDDBof2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg=="/>
                        <div className="styles--sc-card">
                            <div className="styles--sc-card__container">
                                <div className="styles--sc-card__column-wrapper">
                                    <div className="styles--sc-card__title-wrapper">
                                        <div className="styles--sc-card__title">
                                            Game title: {item.title}
                                        </div>
                                        <div className="styles--sc-card__title">
                                            Game info: {item.description}
                                        </div>
                                        <a href="/"
                                           data-purpose="shopping-course-card-title" target="_self">
                                            <div className="styles--sc-card__title">
                                                Price: {item.price}
                                            </div>

                                            <span className="styles--sc-card__instructors" data-purpose="">
                                            By AVAHas Games Team</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        <div className="styles--sc-card__column-wrapper">
                            <p><strong>Price: {item.price} $</strong></p>
                            <button data-purpose="shopping-cart-addToBag" type="button"
                                    className="btn btn-lg btn-primary btn-block"
                                    onClick={addToBag(item)}
                            >Buy
                            </button>
                            <button data-purpose="shopping-cart-addToBag" type="button"
                                    className="btn btn-lg btn-primary btn-block"
                                    onClick={deleteItem(item)}
                            >Delete
                            </button>
                        </div>
                        </div>
                    </div>
                ))}
                <div className="styles--sc-card__container styles--sc-card2">
                    <p><strong>Total: Total_Price $</strong></p>
                    <button type="button"
                            className="btn btn-lg btn-primary btn-block"
                            onClick={pay}
                    >Checkout
                    </button>
                </div>
            </div>
            : null
    )
}

export default ShoppingCard
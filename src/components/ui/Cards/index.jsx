import React,{useState,useEffect,Suspense ,lazy  } from "react"
// import { NavLink } from "react-router-dom"
import Slider from 'infinite-react-carousel';
import style from "./style.css"

const Header = React.lazy(() => import("./HeaderContent"));
const Games = React.lazy(() => import("./GamesContent"));
const Discounts = lazy(() => import("./DiscountsContent"));


const initialDefault = {
    dots:false, 
    adaptiveHeight:false,
    arrows:false,
    slidesToShow:4
}
const Cards = ({info = [],page}) =>{
    console.log(page,'page')
    const [cardInfo , setCardInfo] = useState(info)
    const [settings, setSettings] = useState(initialDefault)
    useEffect(() => {
        window.addEventListener('resize', cardsPosition)
        return ()=>{
            console.log('remove addEventListener')
        }
    }, []);
    const cardsPosition = ()=>{
        const  docoumentWidth = document.body["clientWidth"]
        if(docoumentWidth<=532){
            setSettings(prev=>({
                ...prev,
                ['slidesToShow']:1
            }))
        }
        else if(docoumentWidth<=767){
            setSettings(prev=>({
                ...prev,
                ['slidesToShow']:2
            }))
        }
        else if(docoumentWidth<=991){
            setSettings(prev=>({
                ...prev,
                ['slidesToShow']:3
            }))
        }else if(docoumentWidth){
            setSettings(prev=>({
                ...prev,
                ['slidesToShow']:4
            }))
        }
    }
    return (
        <div className="slider " >
            <Slider {...settings} >
            {
            cardInfo.map(el =>
                <div  key={el.id} className="each-slide">
                    <div className="card " style={el.style}>
                        {/* <NavLink  to={el.gameUrl} className="card__link"> */}
                            <div className="card__item">
                                <img className="card__img" src={el.url}/>  
                            </div>
                        {/* </NavLink> */}
                    </div>
                    {page === "Header"?
                    <Suspense fallback={<div>Loading</div>}>
                        <Header name={el.name} />
                    </Suspense>
                    :null
                    }
                    {page === "Games"?
                    <Suspense fallback={<div>Loading</div>}>
                        <Games name={el.name} rating={el.rating} price={el.price} sale={el.sale} saleFrom={el.saleFrom}/>
                    </Suspense>
                    :null
                    }
                     {page === "Discounts"?
                    <Suspense fallback={<div>Loading</div>}>
                        <Discounts name={el.name} rating={el.rating} price={el.price} sale={el.sale} saleFrom={el.saleFrom}/>
                    </Suspense>
                    :null
                    }
                </div>)
                }
            </Slider>
        </div>
        
    )
}

export default Cards
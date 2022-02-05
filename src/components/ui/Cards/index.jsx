import React,{useState,useEffect} from "react"
// import { NavLink } from "react-router-dom"
import Slider from 'infinite-react-carousel';

// lazy load petqa lini
import Header from "./Header";
import Games from "./Games";
import Discounts from "./Discounts";

import style from "./style.css"

const initialDefault = {
    dots:false, 
    adaptiveHeight:false,
    arrows:false,
    slidesToShow:4
}
// const cardStyle = {}
const Cards = ({info = [],}) =>{
    const [cardInfo , setCardInfo] = useState(info)
    const [settings, setSettings] = useState(initialDefault)
    useEffect(() => {
        window.addEventListener('resize', cardsPosition)
        // cardsPosition()
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
    //     // const changeContent = content.map((el,index)=>{
    //     //     el.style = {
    //     //         left:responsWidth * index,
    //     //         width: `${responsWidth}px`,
    //     //     }
    //     //     return el
    //     // })
    //     // setCardInfo(changeContent)
    }
    return (
        <div className="slider " >
                
            {console.log(settings,'settings')}
            <Slider {...settings} >
            {
            cardInfo.map(el =>
                <div  key={el.id}>
                <div className="card each-slide" style={el.style}>
                    {/* <NavLink  to={el.gameUrl} className="card__link"> */}
                        <div className="card__item">
                            <img className="card__img" src={el.url}/>  
                        </div>
                    {/* </NavLink> */}
                </div>
                    {/* <Header name={el.name}/> */}
                    {/* <Games name={el.name}/> */}
                    <Discounts name={el.name}/>
                </div>)
                }
            </Slider>
        </div>
        
    )
}

export default Cards
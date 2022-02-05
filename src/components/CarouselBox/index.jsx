import React from "react"
import Carousel from "../ui/Carousel"
import YouplayBox from "../ui/YouplayBox"
import style from "./style.css"

const Games = ({info,content}) =>{

    return (
        <div className="carousel-box" id={content}>
            {content !== "header"?<YouplayBox name={content}/>:null}
            <Carousel info = {info} content={content}/>
        </div>
    )
}

export default Games
import React from "react"
import Cards from "../ui/Cards"
import YouplayBox from "../ui/YouplayBox"
import style from "./style.css"

const Games = ({info,page}) =>{

    return (
        <div className="carousel-box" id={page}>
            {page !== "Header"?<YouplayBox name={page}/>:null}
            <Cards info = {info} page={page}/>
        </div>
    )
}

export default Games
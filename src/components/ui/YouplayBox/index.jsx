import React from "react"
import Button from "../../ui/Button";
import style from "./style.css"

const YouplayBox = ({name,href}) =>{

    return (
        <div className="youplay-box container ">
            <h2>{name}&nbsp;</h2>
            {href?<Button children='Learn More' type='button' buttonSize='btn-medium'/>:null}
        </div>
    )
}

export default YouplayBox
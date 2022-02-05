import React from "react"

import style from "./style.css"

const YouplayBox = ({name}) =>{

    return (
        <div className="youplay-box container ">
            <h2>{name}&nbsp;</h2>
            <button>See More</button>
        </div>
    )
}

export default YouplayBox
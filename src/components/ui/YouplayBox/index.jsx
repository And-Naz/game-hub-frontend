import React from "react"

import style from "./style.css"

const YouplayBox = ({name,href}) =>{

    return (
        <div className="youplay-box container ">
            <h2>{name}&nbsp;</h2>
            {href?<button>See More</button>:null}
        </div>
    )
}

export default YouplayBox
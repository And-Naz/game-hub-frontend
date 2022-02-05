import React,{useState,useEffect} from "react"

import style from "./style.css"

const Header = ({name}) =>{

    return (
       <div class="over-info">
           <div>
               <div>
                   <h4>{name}</h4>
                </div>
            </div>
        </div>
    )
}

export default Header
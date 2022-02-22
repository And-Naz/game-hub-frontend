import style from "./style.module.css"
import React from "react";
const HexagonRating = ({rating}) => {
    return (
        <div className={style.hexagonRating}>
            <div className={style.button}>
                <div className={style.hex}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={style.hex}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <span>{+rating/10}</span>
        </div>
    );
}

export default HexagonRating;

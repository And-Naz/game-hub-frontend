import React from 'react';
import './style.css'


function Card({children, name, prof, gender}) {
    return (
        <div className="card">
            <img className="card-img" src={gender} alt="member"/>
            <div className="card-body">
                <h3>{name}</h3>
                <h3>{prof}</h3>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default Card;
import React from 'react';
import {Link} from "react-router-dom";
import "./style.css"

const Info = ({info}) => {
    return (
        <div key={info.id} className='game-play_info info'>
            <div className='info__img' style={{backgroundImage:`url('${info.url}')`}}>
               
            </div>
            <div className="info__row t-row">
                <div className="info__r-1">
                    <div className="info__rl-1">Name</div>
                    <div className="info__rl-2">
                        <h1>{info.name}</h1>
                    </div>
                </div>
                <div className="info__r-2">
                    <div className="info__rl-1">Genres</div>
                    <div className="info__rl-2" >
                    {info.Genres.map(item=>
                        <Link key={`${item.name}${item.id}`} to={`/games/${item.url}`} rel="tag">{item.name},</Link>
                    )}
                    </div>
                </div>
                <div className="info__r-1">
                    <div className="info__rl-1">Features</div>
                    <div className="info__rl-2">
                        {info.Features.map(item=>
                            <Link  key={`${item.name}${item.id}`} to={`/games/${item.url}`} rel="tag">{item.name},</Link>
                        )}
                    </div>
                </div>
                <div className="info__r-2">
                    <div className="info__rl-1">Year</div>
                    <div className="info__rl-2">
                        <Link to={`/games/${info.year.url}`} rel="tag">{info.year.name}</Link>
                    </div>
                </div>
                <div className="info__r-1">
                    <div className="info__rl-1">Country</div>
                    <div className="info__rl-2">
                        <Link to={`/games/${info.country.url}`} rel="tag">{info.country.name}</Link>
                    </div>
                </div>
                <div className="info__r-2">
                    <div className="info__rl-1">Creator</div>
                    <div className="info__rl-2">
                        <Link to={`/games/${info.created.url}`} rel="tag">{info.created.name}</Link>
                    </div>
                </div>
                <div className="info__r-1">
                    <div className="info__rl-1">Rating</div>
                    <div className="info__rl-2">
                        {info.rating/10}/10
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;

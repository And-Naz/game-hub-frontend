import React from 'react';
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
                        <a key={`${item.name}${item.id}`} href={item.url} rel="tag">{item.name},</a>
                    )}
                    </div>
                </div>
                <div className="info__r-1">
                    <div className="info__rl-1">Features</div>
                    <div className="info__rl-2">
                        {info.Features.map(item=>
                            <a  key={`${item.name}${item.id}`} href={item.url} rel="tag">{item.name},</a>
                        )}
                    </div>
                </div>
                <div className="info__r-2">
                    <div className="info__rl-1">Year</div>
                    <div className="info__rl-2">
                        <a href={info.year.url} rel="tag">{info.year.in}</a>
                    </div>
                </div>
                <div className="info__r-1">
                    <div className="info__rl-1">Country</div>
                    <div className="info__rl-2">
                        <a href={info.country.url} rel="tag">{info.country.in}</a>
                    </div>
                </div>
                <div className="info__r-2">
                    <div className="info__rl-1">Creator</div>
                    <div className="info__rl-2">
                        <a href={info.created.url} rel="tag">{info.created.by}</a>
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

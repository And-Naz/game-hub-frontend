import {Link} from "react-router-dom";
import "./style.css"

const Info = ({info}) => {
    const {id,imageSrc,name,rating} = info

    // const {id,imageSrc,namer,rating,author,Genres,Features,year,country} = info
    return (
        <div key={id} className='game-play_info info'>
            <div className='info__img' style={{backgroundImage:`url('${imageSrc}')`}} alt="info-img">
               
            </div>
            <div className="info__row t-row">
                <div className="info__r-1">
                    <div className="info__rl-1">Name</div>
                    <div className="info__rl-2">
                        <h1>{name}</h1>
                    </div>
                </div>
                {/* <div className="info__r-2">
                    <div className="info__rl-1">Genres</div>
                    <div className="info__rl-2" >
                    {Genres.map(item=>
                        <Link key={`${name}${id}`} to={`/games/${item.url}`} rel="tag">{item.name},</Link>
                    )}
                    </div>
                </div> */}
                {/* <div className="info__r-1">
                    <div className="info__rl-1">Features</div>
                    <div className="info__rl-2">
                        {Features.map(item=>
                            <Link  key={`${item.name}${item.id}`} to={`/games/${item.url}`} rel="tag">{item.name},</Link>
                        )}
                    </div>
                </div> */}
                {/* <div className="info__r-2">
                    <div className="info__rl-1">Year</div>
                    <div className="info__rl-2">
                        <Link to={`/games/${year.url}`} rel="tag">{year.name}</Link>
                    </div>
                </div> */}
                {/* <div className="info__r-1">
                    <div className="info__rl-1">Country</div>
                    <div className="info__rl-2">
                        <Link to={`/games/${country.url}`} rel="tag">{country.name}</Link>
                    </div>
                </div> */}
                {/* <div className="info__r-2">
                    <div className="info__rl-1">Creator</div>
                    <div className="info__rl-2">
                        <Link to={`/games/${author.url}`} rel="tag">{author.name}</Link>
                    </div>
                </div> */}
                <div className="info__r-1">
                    <div className="info__rl-1">Rating</div>
                    <div className="info__rl-2">
                        {rating/10}/10
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;

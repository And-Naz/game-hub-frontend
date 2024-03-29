import {useState,useCallback} from 'react';
import "./style.css"
const Description = ({description}) => {
    const  [wrapper,setWrapper] = useState(true)
    const handleWrapperChange = useCallback(()=>{
        setWrapper(prev=>prev=!prev)
    },[wrapper])
    return (
        <div className='game-play__description description'>
            <div className="description__prr">Про игру</div>
            <div className="description__infotext">
                <div className={`description__content-wrapper ${!!wrapper?"contracted":"expanded"} `}>
                    <p>
                        {description}
                        <span className="contracted__gnv"> © GameHub</span>
                    </p>
                </div>
                <p className="description__more-link"><a className="description__more" onClick={handleWrapperChange}>{!!wrapper?"Подробнее...":"Свернуть"}</a></p>
            </div>
    </div>
    );
}

export default Description;

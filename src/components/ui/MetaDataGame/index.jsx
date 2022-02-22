import React from 'react';
import "./style.css"
const MetaDataGame = () => {
    return (
        <div className='metadata'>
            <div className='metadata__genres genres'>
                <div className='genres__title'>
                    <span>Genres</span>    
                </div>
                <div className='genres__items'>
                    <ul className="genres__metadata-list metadata-list">
                        <li className='metadata-list__action'>
                            {/* <Link to={'gameUrl'} className="metadata-list_link"> */}
                                <span className='metadata-list__text'>
                                    <span className='metadata-list__message'>
                                        Action
                                    </span>
                                </span>
                            {/* </Link> */}
                        </li>
                        <li className='metadata-list__action'>
                            {/* <Link to={'gameUrl'}> */}
                                <span className='metadata-list__text'>
                                    <span className='metadata-list__message'>
                                        Shooter
                                    </span>
                                </span>
                            {/* </Link> */}
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className='metadata__features features'>
                <div className='features__title'>
                    <span>features</span> 
                </div>
                <div className='genres__items'>
                    <span className='features__item'>Co-op</span>
                </div>
            </div> */}
        </div>
    );
}

export default MetaDataGame;

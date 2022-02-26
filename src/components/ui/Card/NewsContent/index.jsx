
import HexagonRating from '../../HexagonRating';
import MetaDataGame from '../../MetaDataGame';
import style from './style.css'
const NewsContent = ({rating}) => {
    return (
        <div className='news-content card__content'>
            <HexagonRating rating={rating}/>
            {/* <MetaDataGame /> */}
        </div>
    );
}

export default NewsContent;

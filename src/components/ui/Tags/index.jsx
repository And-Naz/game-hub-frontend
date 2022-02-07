import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const Tags = ({tags}) => {

    return (
        <div className='tags'>
            <div className='tag'>
                <svg className="svg-inline--fa fa-tags fa-w-20" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="tags" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path></svg>
                {/* <Link to={'/'} className="tag__link"> */}
                
                   {
                    tags?.map(el=>
                    <a href={el.url} className="tag__link">
                            <span key={el.id}>{el.name},</span>
                        </a>
                    )
                   }
                
                {/* </Link> */}
            </div>
        </div>
    );
}

export default Tags;

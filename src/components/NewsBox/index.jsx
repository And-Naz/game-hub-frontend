import React from 'react';
import Card from "../ui/Card"
import NewsContent from './NewsContent';
import YouplayBox from '../ui/YouplayBox';
import "./style.css"

const NewsBox = ({info,content}) => {
    return (
            <div className="news-box container">
               <YouplayBox name={content} href={false}/>
               { info.slice(-4,-1).map(el =>
                    <article key={el.id} className='news'>
                        <Card data={el} content={content}/>
                        <NewsContent data={el}/>
                    </article>
                )}
            </div>
    );
}

export default NewsBox;

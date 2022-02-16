import {forwardRef} from 'react';
import HeaderContent from "./HeaderContent"
import GamesContent from "./GamesContent"
import DiscountsContent from "./DiscountsContent"
import NewsContent from "./NewsContent"

import "./style.css";


const Card = forwardRef(({data,content,...otherProps},ref) => {
  const {url,name,rating,price,sale,saleFrom} = data
  return (
      <div className="card" ref={ref} {...otherProps}>
     
            <div className="card__shape">
                <img className="card__img" src={url} alt={`${name}_img`}/>  
            </div>
         
          {   
              content === "Header"?
              <HeaderContent name={name} />
              :null
          } 
          {
              content === "Games"?
              <GamesContent name={name} rating={rating} price={price} sale={sale} saleFrom={saleFrom}/>
              :null
          }
          {
              content === "Discounts"?
              <DiscountsContent name={name} rating={rating} price={price} sale={sale} saleFrom={saleFrom}/>
              :null
          }
          {
              content === "Latest News"?
              <NewsContent rating={rating} />
              :null
          }
        
      </div>
  );
})
export default Card

import {forwardRef} from 'react';
import HeaderContent from "./HeaderContent"
import GamesContent from "./GamesContent"
import DiscountsContent from "./DiscountsContent"
import "./style.css";


const Card = forwardRef(({data,content,...otherProps},ref) => {
  const {url,name,rating,price,sale,saleFrom} = data
  return (
      <div className="card" ref={ref} {...otherProps}>
          <div className="card__shape">
              <img className="card__img" src={url} alt={`${name}_img`}/>  
          </div>
          {   
              content === "header"?
              <HeaderContent name={name} />
              :null
          } 
          {
              content === "games"?
              <GamesContent name={name} rating={rating} price={price} sale={sale} saleFrom={saleFrom}/>
              :null
          }
          {
              content === "discounts"?
              <DiscountsContent name={name} rating={rating} price={price} sale={sale} saleFrom={saleFrom}/>
              :null
          }
      </div>
  );
})
export default Card

import {forwardRef} from 'react';
import { Link } from "react-router-dom";
import HeaderContent from "./HeaderContent"
import GamesContent from "./GamesContent"
import DiscountsContent from "./DiscountsContent"
import NewsContent from "./NewsContent"
import Image from  '../Image';
import Loader from '../Loader';
import "./style.css";


const Card = forwardRef(({data,content,...otherProps},ref) => {
  const {id,url,name,rating,price,sale,saleFrom} = data
  return (
    <Link to={`/games/game/${id}`}  {...otherProps} className="card__link">
      <div className="card" ref={ref}>
            <div className="card__shape">
                <Image className="card__img" src={url} alt={`${name}_img`} />
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
    </Link>

  );
})
export default Card

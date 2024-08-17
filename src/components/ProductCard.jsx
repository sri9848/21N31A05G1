import React from "react";
import Card from "./Card";

const ProductCard = ({ shop}) => {
  return (
    <div>
      <div className="cards-main">
        {shop.map((item, i) => (
          <div className="cards" key={i}>
            <div className="title"><p>{item.title}</p></div>
            <p className="price">{item.price} $</p>
            
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
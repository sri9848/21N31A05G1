import React, { useEffect, useState } from "react";
//import axios from 'axios'
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";


const Home = () => {
  const [shop, setShop] = useState([]);
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setShop(data)===setNews(data));
  }, []);

  return (
    <div>
      <Header setShop={setShop} news={news}/>
      <ProductCard shop={shop} />
    </div>
  );
};

export default Home;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Coin from "../Pages/Coin/Coin";
import CoinDetails from "../Pages/CoinDetails/CoinDetails";
import ExchangeDetails from "../Pages/ExchangeDetails.js/ExchangeDetails";
import Exchange from "../Pages/Exchanges/Exchange";


import Home from "../Pages/Home/Home";
import Notfound from "../Pages/not-found/404";

const RouterNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path={`coins`} element={<Coin></Coin>}></Route>
      <Route path={`exchanges`} element={<Exchange></Exchange>}></Route>
      <Route path={`coins/:id`} element={<CoinDetails></CoinDetails>}></Route>
      <Route path={`contact`} element={<Coin></Coin>}></Route>
      <Route path={`pathdaynews`} element={<Coin></Coin>}></Route>
      <Route path={`porfolio`} element={<Coin></Coin>}></Route>
      <Route path={`exchanges/:id`} element={<ExchangeDetails></ExchangeDetails>}></Route>
      <Route path="*" element={<Notfound></Notfound>}/>
    </Routes>
  );
};

export default RouterNavigation;

import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { currencyMock } from "../../Assets/StaticData/Data";
import { useGlobalContext } from "../../utility/Context/Context";
import { invokeAPI } from "../../utility/invokeAPI/invokeAPI";

const Coin = () => {



  let array = [...Array(50).keys()]
  const {
    loading,
    setloading,
    apicALL,
    countReduce,
    countIncrease,UpdatePageCount,
    changeCurrencyValue,
    currency,
    count,setCount
  } = useGlobalContext();

  const [coins, setcoins] = useState();

  useEffect(() => {
    apicALL(
      "coins/markets",
      "get",
      "",
      {
        vs_currency: currency,
        order: "market_cap_desc",
        per_page: 250,
        page: count,
        sparkline: false,
      },
      setcoins
    );
  }, [count, currency]);




  return (
    <div class="">
      <div class="card m-auto col-5">
        <div class="card-body">
          <div class="mb-3">
            <label for="currencySelect" class="form-label">
              Curency
            </label>
            <select
              class="form-select form-select-lg"
              name="currencySelect"
              id="currencySelect"
              onChange={(e) => changeCurrencyValue(e.target.value)}
            >
              curr
              {currencyMock.map((item, index) => {
                return (
                  <option key={index} value={item.cc}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

<div className=" row m-5">    {loading ? (
        <Bars width={"100%"} height={`500`}></Bars>
      ) : (
        coins?.map((item) => {
          return (
            <div key={item.id} class="col-3 p-0 ">
              <div class="card m-2  shadow pe-auto">
                <div class="card-body text-center m-auto">
                  <img
                    src={item.image}
                    className="m-auto  rounded-circle"
                    alt={item.name}
                  ></img>
                  <h3 class="card-title">{item.name}</h3>
                  <div class="card-footer d-flex justify-content-between align-items-center">
                    <p class="card-text"> Volume: {item.total_volume}</p>
                    <p class="card-text">Rank: {item.market_cap_rank}</p>
                  </div>
                  <div class="card-body d-flex  justify-content-center align-items-center">
                    <Link to={item.id} class="btn btn-warning">
                      Get Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      {coins ? (
        <div className="container d-flex flex-wrap justify-content-center align-items-center">
      {
       array.map((item,index)=>{
        return <button onClick={()=>UpdatePageCount(item+1)} key={index} className="btn btn-dark">{item+1}</button>
       })
      }
        </div>
      ) : (
        ""
      )}</div>
  
    </div>
  );
};

export default Coin;

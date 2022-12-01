import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { currencyMock } from "../../Assets/StaticData/Data";
import { useGlobalContext } from "../../utility/Context/Context";
import { invokeAPI } from "../../utility/invokeAPI/invokeAPI";

const Coin = () => {
  let array = [...Array(5).keys()];
  const {
    loading,
    setloading,
    apicALL,
    countReduce,
    countIncrease,
    UpdatePageCount,
    changeCurrencyValue,
    currency,
    count,
    setCount,
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
        per_page: 100,
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

      <div class="table-responsive">
        <table
          class="table table-striped
    table-hover	
    table-borderless
    table-primary
    align-middle"
        >
          <thead class="table-light">
            <caption>Table Name</caption>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>Chain</th>
              <th>1h</th>
              <th>24h</th>
              <th>24h Volume</th>
              <th>FDV</th>
              <th>Last Update</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {coins?.map((item,index) => {
            return  <tr key={item.id} class="table-primary">
                <td className="" scope="row">{index}</td>
                <td>
                  <div className=' align-items-center  d-flex'><img className="table-image" src={item.image} alt={item.name} /> <p>{item.name}</p> </div> 
                </td>
                <td>
                  {currency} {item.current_price}
                </td>
                <td>
                  {currency} {item.current_price}
                </td>
                <td>
                  {currency} {item.current_price}
                </td><td>
                  {currency} {item.current_price}
                </td>
                <td>
                  {currency} {item.current_price}
                </td><td>
                  {currency} {item.current_price}
                </td>
                <td>
                <div class="card-body d-flex  justify-content-center align-items-center">
                      <Link to={item.id} class="btn btn-warning">
                        Get Details
                      </Link>
                    </div>
                </td>
              </tr>;
            })}
          </tbody>
          <tfoot className=" text-end"></tfoot>
        </table>
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item page-link disabled">
    Previous
    </li>
    {array.map((item, index) => {
              return (
                <li class="page-item"
                  onClick={() => UpdatePageCount(item + 1)}
                  key={index}
                  className="page-link"
                >
                  {item + 1}
                </li>
              );
            })}
   
    <li class="page-item page-link">
     Next
    </li>
   
  </ul>
</nav>
      </div>

      {/* <div className=" row m-5">
        {loading ? (
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
            {array.map((item, index) => {
              return (
                <button
                  onClick={() => UpdatePageCount(item + 1)}
                  key={index}
                  className="btn btn-dark"
                >
                  {item + 1}
                </button>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div> */}
    </div>
  );
};

export default Coin;

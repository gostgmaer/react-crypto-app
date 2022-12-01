import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../utility/Context/Context";
import ChartData from "../../Components/Charts/ChartData";
import { currencyMock } from "../../Assets/StaticData/Data";
import { Bars } from "react-loader-spinner";
import { FaArrowDown, FaArrowUp, FaBarcode } from "react-icons/fa";

const CoinDetails = () => {
  const {
    loading,
    apicALL,
    count,
    interval,
    days,
    setDays,
    changeCurrencyValue,
    currency,
  } = useGlobalContext();

  const [coinDetails, setcoinDetails] = useState();
  const [chartVolium, setChartVolium] = useState();

  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    apicALL(
      `coins/${id}`,
      "get",
      "",
      {
        tickers: true,
        market_data: true,
        community_data: true,
        developer_data: true,
        sparkline: false,
      },
      setcoinDetails
    );
    apicALL(
      `coins/${id}/market_chart`,
      "get",
      "",
      {
        vs_currency: currency,
        days: days,
        interval: interval,
      },
      setChartVolium
    );
  }, [id, currency]);

  console.log(coinDetails ? coinDetails : "No data ");
  return (
    <div className=" container">
      <div class="card">
        <div class="m-3  col-5">
          <select
            class="form-select form-select-lg"
            name="currencySelect"
            id="currencySelect"
            onChange={(e) => changeCurrencyValue(e.target.value)}
          >
            {currencyMock.map((item, index) => {
              return (
                <option key={index} value={item.cc}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        {loading ? (
          <Bars width={``}></Bars>
        ) : (
          <div class="card-body">
            <img
              className=" rounded-circle"
              src={coinDetails?.image.large}
              alt=""
            />
            <p class="card-text  align-items-center d-flex">
              {coinDetails.market_data.price_change_percentage_24h < 0 ? (
                <FaArrowDown></FaArrowDown>
              ) : (
                <FaArrowUp></FaArrowUp>
              )}
              {coinDetails.market_data.price_change_percentage_24h}%
            </p>
          </div>
        )}
      </div>
      <ChartData Type='Bar'></ChartData>
    </div>
  );
};

export default CoinDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../utility/Context/Context";
import ChartData from "../../Components/Charts/ChartData";
import { currencyMock } from "../../Assets/StaticData/Data";
const CoinDetails = () => {
  const { loading, apicALL, count, interval, days, setDays,changeCurrencyValue,currency } =
    useGlobalContext();

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
    apicALL(`coins/${id}/market_chart`, "get", "", {
      vs_currency: currency,
      days: days,
      interval: interval,
    },setChartVolium);
  }, [id,currency]);

  console.log(coinDetails ? coinDetails : "No data ");
  return (
    <div>
      <div class="mb-3">
        <label for="currencySelect" class="form-label">Curency</label>
        <select class="form-select form-select-lg" name="currencySelect" id="currencySelect" onChange={e=>changeCurrencyValue(e.target.value)} >
        
          {currencyMock.map((item,index)=>{
            return  <option key={index} value={item.cc}>{item.name}</option>
          })}
         
        </select>
      </div>
      <ChartData></ChartData>
    </div>
  );
};

export default CoinDetails;

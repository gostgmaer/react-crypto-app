import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { invokeAPI } from "../../utility/invokeAPI/invokeAPI";

const ExchangeDetails = () => {
    const [chartVolium, setChartVolium] = useState(7);
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const res = async () => {
      const data = await invokeAPI(
        `exchanges/${id}`,
        "get",
        "",
        { accept: "application/json" },
        ""
      );
      const chart = await invokeAPI(
       `exchanges/${id}/volume_chart`,
        "get",
        "",
        { accept: "application/json" },
        {days:chartVolium}
      );
     console.log(chart);
      console.log(data);
    };
    res();
  }, [chartVolium]);

  return <div>ExchangeDetails</div>;
};

export default ExchangeDetails;

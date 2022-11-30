import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { invokeAPI } from "../../utility/invokeAPI/invokeAPI";

const Exchange = () => {
  const [exchanges, setExchanges] = useState();
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const res = async () => {
      const data = await invokeAPI(
        "exchanges",
        "get",
        "",
        { accept: "application/json" },
        { per_page: 250, page: count }
      );
      console.log(data);
      setExchanges(data);
      setLoading(false);
    };
    setTimeout(() => {
      res();
    }, 100);
  }, [count]);

  return (
    <div class="row m-5">
      {loading ? (
        <Bars width={"100%"} height={`500`}></Bars>
      ) : (
        exchanges?.map((item) => {
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
                    <p class="card-text"> Score: {item.trust_score}</p>
                    <p class="card-text">Rank: {item.trust_score_rank}</p>
                  </div>
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <Link to={item.id} class="btn btn-warning">
                      Get Details
                    </Link>
                    <a
                      href={item.url}
                      target={`_blank`}
                      class=" btn btn-light "
                    >
                      Official Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      <div className="container d-flex justify-content-center align-items-center">
        {" "}
        <button className="m-3" onClick={() => setCount(count - 1)}>
          {" "}
          Previous{" "}
        </button>{" "}
        <button className="m-3" onClick={() => setCount(count + 1)}>
          {" "}
          Next{" "}
        </button>{" "}
      </div>
    </div>
  );
};

export default Exchange;

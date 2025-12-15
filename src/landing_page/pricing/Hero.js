import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row" style={{ height: "160px" }}></div>
      <div className="row text-center my-5">
        <h1 className="display-4 fw-semibold">Charges</h1>
        <p className="fs-3 fw-semibold text-muted">
          List of all charges and taxes
        </p>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 text-center py-5 px-1">
          <img src="media/img/pricing0.svg" className="w-75" />
          <h1 className="fs-2 my-4">Free equity delivery</h1>
          <p className="fs-4 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 text-center  py-5 px-1">
          <img src="media\img\intradayTrades.svg" className="w-75" />
          <h1 className="fs-2 my-4">Intraday and F&O trades</h1>
          <p className="fs-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 text-center  py-5 px-1">
          <img src="media/img/pricing0.svg" className="w-75" />
          <h1 className="fs-2 my-4">Free equity delivery</h1>
          <p className="fs-4 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

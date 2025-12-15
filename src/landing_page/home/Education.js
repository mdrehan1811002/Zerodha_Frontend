import React from "react";
export default function Education() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-12 col-md-6 pt-5">
          <img src="media\img\education.svg" className="w-75 " />
        </div>

        <div className="col-12 col-md-6 pt-5">
          <h1 className="my-4 fs-2">Free and open market educaton</h1>
          <p>
            Varsity, the largest online stock market educaton book in the world
            convering everything from the basics to advanced trading.
          </p>
          <a href="" className="text-decoration-none">
            Versity <i className="fa-solid fa-arrow-right-long "></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries
          </p>
          <a href="" className="text-decoration-none">
            TradingQ&A <i className="fa-solid fa-arrow-right-long "></i>
          </a>
        </div>
      </div>
    </div>
  );
}

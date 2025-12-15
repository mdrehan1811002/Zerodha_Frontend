import React from "react";
export default function Pricing() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-4 col-12">
          <h1 className="mb-3 fs-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="text-decoration-none">
            See pricing <i className="fa-solid fa-arrow-right-long "></i>
          </a>
        </div>
        <div className="col-2 mb-5"></div>
        <div className="col-md-6 col-12">
          <div className="row text-center">
            <div className="col p-3 border rounded-1">
              <h1 className="mb-3">&#8377;0</h1>
              <p>
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col p-3 border rounded-1">
              <h1 className="mb-3">&#8377;20</h1>
              <p>Intraday and F&O trades</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

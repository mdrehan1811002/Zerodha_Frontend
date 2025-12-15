import React from "react";
import { Link } from "react-router-dom";
const Universe = () => {
  return (
    <div className="container">
      <div className="row my-5 text-center ">
        <h5 className="p-5 fs-3 text-muted">
          Want to know more about our technology stack? Check out the{" "}
          <a href="">Zerodha.tech</a> blog.
        </h5>
      </div>

      <div className="row my-5 text-center ">
        <h1 className="px-5 fs-1 text-muted">The Zerodha Universe</h1>
        <p className="px-5 fs-4 text-muted my-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row my-5 text-center ">
        <div class="col-12 col-sm-6 col-md-4 p-5 text-center">
          <a href="">
            <img
              src="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
              className="w-75 img-hov"
            />
            <p className="text-muted my-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 p-5 text-center">
          <a href="">
            <img
              src="https://zerodha.com/static/images/products/sensibull-logo.svg"
              className="w-75 img-hov"
            />
            <p className="text-muted my-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 p-5 text-center">
          <a href="">
            <img
              src="https://zerodha.com/static/images/partners/tijori.svg"
              className="w-50 img-hov"
            />
            <p className="text-muted my-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 p-5 text-center">
          <a href="">
            <img
              src="https://zerodha.com/static/images/products/streak-logo.png"
              className="w-75 img-hov"
            />
            <p className="text-muted my-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 p-5 text-center">
          <a href="">
            <img
              src="https://zerodha.com/static/images/products/smallcase-logo.png"
              className="w-75 img-hov"
            />
            <p className="text-muted my-3 ">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 p-5 text-center">
          <a href="">
            <img
              src="https://zerodha.com/static/images/products/ditto-logo.png"
              className="w-50 img-hov"
            />
            <p className="text-muted my-3 ">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </a>
        </div>
      </div>

      <div className="row text-center mb-5 linktag">
        <Link
          to="/signup"
          className="p-2 border-0 fs-4 text-white rounded-1 fw-semibold mt-1 "
          style={{
            width: "230px",
            margin: "0 auto",
            backgroundColor: "#387ed1",
          }}
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
};

export default Universe;

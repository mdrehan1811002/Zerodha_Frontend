import React from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row  text-center linktag">
        <img
          src="media/img/homeHero.png"
          alt="Hero Image"
          className="mb-5 d-block mx-auto mt-5"
          style={{ width: "60%" }}
        />
        <h1 className="display-5 fw-semibold lh-lg">Invest in everything</h1>
        <p className="fs-3 lh-base">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          to="/signup"
          className="p-2 border-0 fs-4 text-white rounded-1 fw-semibold my-3 text-decoration-none"
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
}

import React from "react";

const Hero = () => {
  return (
    <div className="container  ">
      <div className="row" style={{ height: "160px" }}></div>
      <div className="row text-center border-bottom pb-5">
        <h1 className="fs-1 ">Zerodha Products</h1>
        <h4 className="fs-4 fw-normal text-muted my-3">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="fs-5 fw-normal text-muted">
          Check out our <a href="">investment offerings →</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;

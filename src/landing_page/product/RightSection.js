import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  linkName,
}) => {
  return (
    <div className="container ">
      <div className="row  m-5 align-items-cente">
        <div className="col-12 col-md-6 py-5">
          <h1 className="text-muted mb-5 mt-5">{productName}</h1>
          <p className="fs-5  text-muted">{productDescription}</p>

          <a href="" className="my-4 fs-6">
            {linkName} &nbsp;
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-12 col-md-6 ">
          <img src={imageURL} className="w-75 mx-auto"></img>
        </div>
      </div>
    </div>
  );
};

export default RightSection;

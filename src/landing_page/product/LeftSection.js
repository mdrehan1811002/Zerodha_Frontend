import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 ">
      <div className="row  mt-5">
        <div className="col-12 col-md-6 p-5 ">
          <img src={imageURL} className="w-75 mx-auto"></img>
        </div>
        <div className="col-12 col-md-6 p-5 ">
          <h1 className="text-muted mb-5">{productName}</h1>
          <p className="fs-5  text-muted">{productDescription}</p>
          <div className=" my-4 fs-6 ">
            {tryDemo && (
              <a href="" style={{ marginRight: "10%" }}>
                {tryDemo} &nbsp;
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
            {learnMore && (
              <a href="">
                {learnMore} &nbsp;
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>
          <div className="">
            <a href={googlePlay}>
              <img
                src="media/img/googlePlayBadge.svg"
                style={{ marginRight: "5%" }}
              />
            </a>
            <a href={appStore}>
              <img src="media\img\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;

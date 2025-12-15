import React, { useState } from "react";

export default function Hero() {
  // let [showDetail, setShowDetail] = useState(false);

  // let clickDetail = () => {
  //   setShowDetail(!showDetail);
  // };

  const [openProfile, setOpenProfile] = useState(null);
  const toggleProfile = (profileId) => {
    setOpenProfile(openProfile === profileId ? null : profileId);
  };
  return (
    <div className="container">
      <div className="" style={{ height: "160px" }}></div>
      <div className="row p-5 mb-5">
        <h1 className="fs-1 text-center ">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-5 border-top">
        <div className="col-12 col-md-6 p-5 fs-5 ">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.{" "}
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            {" "}
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-md-6 p-5 fs-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <h1 className="fs-1 my-5">People</h1>
      </div>
      <div className="row p-5 mb-5">
        <div className="col-12 col-md-6 rounded-circle text-center">
          <img
            src="media\img\nithinKamath.jpg"
            className="rounded-circle w-50 mx-auto"
          />
          <h3 className="my-4 fw-normal fs-4">Nithin Kamath</h3>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-12 col-md-6 ">
          <p className="fs-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="fs-5">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="fs-5">Playing basketball is his zen.</p>

          <p className="fs-5">
            <a href="">Connect on Homepage </a> / <a href=""> TradingQnA </a>/{" "}
            <a href=""> Twitter </a>
          </p>
        </div>
      </div>
      <div className="row my-5 border-top">
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="https://zerodha.com/static/images/Nikhil.jpg"
            className="rounded-circle w-50 mx-auto"
          />
          <h3 className="my-4 fw-normal fs-4">Nikhil Kamath</h3>
          <p className="text-muted">Co-founder & CFO</p>
          <p
            className="my-1  text-muted"
            onClick={() => toggleProfile("nikhil")}
          >
            Bio &nbsp;&nbsp;&nbsp;
            <i
              className={`fa-solid ${
                openProfile === "nikhil" ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>

          {openProfile === "nikhil" && (
            <p className="fs-4 text-start">
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          )}
        </div>
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="https://zerodha.com/static/images/Kailash.jpg"
            className="rounded-circle w-50 mx-auto"
          />
          <h3 className="my-4 fw-normal fs-4">Dr. Kailash Nadh</h3>
          <p className="text-muted">CTO</p>
          <p
            className="my-1 text-center text-muted"
            onClick={() => toggleProfile("kailash")}
          >
            Bio &nbsp;&nbsp;&nbsp;
            <i
              className={`fa-solid ${
                openProfile === "kailash" ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>

          {openProfile === "kailash" && (
            <p className="fs-4 text-start">
              Kailash has a PhD in Artificial Intelligence & Computational
              Linguistics, and is the brain behind all our technology and
              products. He has been a developer from his adolescence and
              continues to write code every day.
            </p>
          )}
        </div>
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="https://zerodha.com/static/images/Venu.jpg"
            className="rounded-circle w-50 mx-auto"
          />
          <h3 className="my-4 fw-normal fs-4">Venu Madhav</h3>
          <p className="text-muted">COO</p>
          <p
            className="my-1 text-center text-muted"
            onClick={() => toggleProfile("venu")}
          >
            Bio &nbsp;&nbsp;&nbsp;
            <i
              className={`fa-solid ${
                openProfile === "venu" ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>

          {openProfile === "venu" && (
            <p className="fs-4 text-start">
              Venu is the backbone of Zerodha taking care of operations and
              ensuring that we are compliant to rules and regulations. He has
              over a dozen certifications in financial markets and is also
              proficient in technical analysis. Workouts, cycling, and
              adventuring is what he does outside of Zerodha.
            </p>
          )}
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="https://zerodha.com/static/images/Hanan.jpg"
            className="rounded-circle w-50 mx-auto"
          />
          <h3 className="my-4 fw-normal fs-4">Hanan Delvi</h3>
          <p className="text-muted">CCO</p>
          <p
            className="my-1 text-center text-muted"
            onClick={() => toggleProfile("hanan")}
          >
            Bio &nbsp;&nbsp;&nbsp;
            <i
              className={`fa-solid ${
                openProfile === "hanan" ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>

          {openProfile === "hanan" && (
            <p className="fs-4 text-start">
              We take pride in the way we support our clients, and Hanan is
              responsible for this with his never ending flow of energy. He is
              the man behind many of our support initiatives that have helped us
              stay ahead of the game. A free thinker, Hanan can be seen posing
              as one in his free time.
            </p>
          )}
        </div>
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="https://zerodha.com/static/images/Seema.jpg"
            className="rounded-circle w-50 mx-auto"
          />
          <h3 className="my-4 fw-normal fs-4">Seema Patil</h3>
          <p className="text-muted">Director</p>
          <p
            className="my-1 text-center text-muted"
            onClick={() => toggleProfile("seema")}
          >
            Bio &nbsp;&nbsp;&nbsp;
            <i
              className={`fa-solid ${
                openProfile === "seema" ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>

          {openProfile === "seema" && (
            <p className="fs-4 text-start">
              Seema who has lead the quality team since the beginning of
              Zerodha, is now a director. She is an extremely disciplined
              fitness enthusiast.
            </p>
          )}
        </div>
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="https://zerodha.com/static/images/karthik.jpg"
            className="rounded-circle w-50 mx-auto"
          />
          <h3 className="my-4 fw-normal fs-4">Karthik Rangappa</h3>
          <p className="text-muted">Chief of Education</p>
          <p
            className="my-1 text-center text-muted"
            onClick={() => toggleProfile("karthik")}
          >
            Bio &nbsp;&nbsp;&nbsp;
            <i
              className={`fa-solid ${
                openProfile === "karthik" ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>

          {openProfile === "karthik" && (
            <p className="fs-4 text-start">
              Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's
              massive educational program. He heads investor education
              initiatives at Zerodha and loves stock markets, classic rock,
              single malts, and photography.
            </p>
          )}
        </div>
      </div>
      <div className="row my-5 ">
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="https://zerodha.com/static/images/Austin.jpg"
            className="rounded-circle w-50 mx-auto"
          />
          <h3 className="my-2 fw-normal fs-4">Austin Prakesh</h3>
          <p className="text-muted">Director Strategy</p>
          <p
            className="my-1 text-center text-muted "
            onClick={() => toggleProfile("austin")}
          >
            Bio &nbsp;&nbsp;&nbsp;
            <i
              className={`fa-solid ${
                openProfile === "austin" ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>

          {openProfile === "austin" && (
            <p className="fs-4 text-start">
              Austin is a successful self-made entrepreneur from Singapore. His
              area of specialty revolves around helping organisations including
              grow by optimizing revenue streams and creating growth strategies.
              He is a boxing enthusiast and loves collecting exquisite watches.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container">
      <div className="row" style={{ height: "160px" }}></div>
      <div className="row">
        <div className="text-center mb-5">
          <h1 className=" mb-3">Open a free demat & trading account online</h1>
          <p className="fs-4">
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </p>
        </div>
      </div>
      <div className="row m-1 m-md-5">
        <div className="col-12 col-md-6 p-0 p-md-5">
          <img
            src="https://signup.zerodha.com/assets/landing-DQ76ex-B.svg"
            className="w-100 w-md-75 "
          />
        </div>
        <div className="col-12 col-md-6 p-0 p-md-5 mt-3">
          <form>
            <h3 className="fs-3">Signup now</h3>
            {/* <p className="fs-5 my-3">Or track your existing application</p>
            <div
              className="input-group mb-3 "
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                height: "50px",
              }}
            >
              <span className="input-group-text" id="basic-addon1">
                +91
              </span>
              <input
                type="text"
                style={{
                  outline: "none",
                }}
                className="form-control"
                placeholder="Mobile Numbar"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div> */}

            <div className="my-5">
              <Link to={"/register"} className="btn btn-outline-dark py-2 px-5">
                Sign up for free
              </Link>
            </div>
          </form>

          <p className="fs-6 my-3">
            By proceeding, you agree to the Zerodha <a href="">terms</a> &{" "}
            <a href="">privacy policy</a>
          </p>
        </div>
      </div>

      <div className="row m-md-5 m-1">
        <h1 className="text-center my-5">
          Investment options with Zerodha demat account
        </h1>

        <div className="col-12 col-md-6 my-md-3 my-1">
          <div className="row">
            <div className="col-4">
              <img src="https://zerodha.com/static/images/stocks-acop.svg" />
            </div>
            <div className="col-8">
              <h3>Stocks</h3>
              <p>
                Invest in all exchange-listed <br />
                securities
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 my-3">
          <div className="row">
            <div className="col-4">
              <img src="https://zerodha.com/static/images/mf-acop.svg" />
            </div>
            <div className="col-8">
              <h3>Mutual funds</h3>
              <p>
                Invest in commission-free direct
                <br />
                mutual funds
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 my-3">
          <div className="row">
            <div className="col-4">
              <img src="https://zerodha.com/static/images/ipo-acop.svg" />
            </div>
            <div className="col-8">
              <h3>IPO</h3>
              <p>
                Apply to the latest IPOs instantly <br />
                via UPI
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 my-3">
          <div className="row">
            <div className="col-4">
              <img src="https://zerodha.com/static/images/fo-acop.svg" />
            </div>
            <div className="col-8">
              <h3>Futures & options</h3>
              <p>
                Hedge and mitigate market risk
                <br />
                through simplified F&O trading
              </p>
            </div>
          </div>
        </div>

        <div className="my-5 text-center">
          <Link
            to="/signup"
            className="p-2 border-0 fs-4 text-white rounded-1 fw-semibold my-3 text-decoration-none link-tag"
            style={{
              margin: "0 auto",
              backgroundColor: "#387ed1",
              width: "30%",
            }}
          >
            Explore Investments
          </Link>
        </div>
      </div>

      <div
        className="row m-5 p-5"
        style={{ backgroundColor: "#f7f7f7", borderRadius: "10px" }}
      >
        <h1 className="text-center my-5">
          Steps to open a demat account with Zerodha
        </h1>

        <div className="col-12 col-md-6 ">
          <img
            src="https://zerodha.com/static/images/steps-acop.svg"
            className="w-md-100 w-75"
          />
        </div>
        <div className="col-12 col-md-6 ">
          <div className="row border-bottom my-3">
            <div className="col-2">
              <span className="fs-4 border rounded-circle p-1">01</span>
            </div>
            <div className="col-10 ">
              <p className="fs-4">Enter the requested details</p>
            </div>
          </div>
          <div className="row border-bottom my-3">
            <div className="col-2">
              <span className="fs-4 border rounded-circle p-1">02</span>
            </div>
            <div className="col-10 ">
              <p className="fs-4">Complete e-sign & verification</p>
            </div>
          </div>
          <div className="row border-bottom my-3">
            <div className="col-2">
              <span className="fs-4 border rounded-circle p-1">03</span>
            </div>
            <div className="col-10 ">
              <p className="fs-4">Start investing!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-5">
        <div className="col-12 col-md-6">
          <img
            src="https://zerodha.com/static/images/acop-benefits.svg"
            className="w-100 w-md-75 mx-auto my-3"
          />
          <h1 className="fs-2">Benefits of opening a Zerodha demat account</h1>
        </div>
        <div className="col-12 col-md-6">
          <h3 className="fs-4 my-4">Unbeatable pricing</h3>
          <p className="fs-5">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades.
          </p>

          <h3 className="fs-4 my-4">Best investing experience</h3>
          <p className="fs-5">
            Simple and intuitive trading platform with an easy-to-understand
            user interface.
          </p>

          <h3 className="fs-4 my-4">No spam or gimmicks</h3>
          <p className="fs-5">
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>

          <h3 className="fs-4 my-4">The Zerodha universe</h3>
          <p className="fs-5">
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
      </div>

      <div className="row m-md-5 m-2">
        <h1 className="text-center my-5">Explore different account types</h1>
        <div className="col-12 col-md-3 border rounded-3 singnup-box m-2 m-md-5 ">
          <a href=" " className="text-black p-5 ">
            <h2 className=" fs-4 ms-3">Individual Account</h2>
            <img
              src="https://zerodha.com/static/images/acop-individual.svg"
              style={{ position: "relative", left: "-32px", width: "40px" }}
            />
            <p className="mb-3 fs-5  ms-3">
              Invest in equity, mutual funds and derivatives
            </p>
          </a>
        </div>
        <div className="col-12 col-md-3 border rounded-3 singnup-box m-2 m-md-5">
          <a href=" " className="text-black p-5 ">
            <h2 className=" fs-4 ms-3">HUF Account</h2>
            <img
              src="https://zerodha.com/static/images/acop-huf.svg"
              style={{ position: "relative", left: "-32px", width: "40px" }}
            />
            <p className="mb-3 fs-5  ms-3">
              Make tax-efficient investments for your family
            </p>
          </a>
        </div>
        <div className="col-12 col-md-3 border rounded-3 singnup-box  m-2 m-md-5">
          <a href=" " className="text-black p-5 ">
            <h2 className=" fs-4 ms-3">NRI Account</h2>
            <img
              src="https://zerodha.com/static/images/acop-nri.svg"
              style={{ position: "relative", left: "-32px", width: "40px" }}
            />
            <p className="mb-3 fs-5  ms-3">
              Invest in equity, mutual funds, debentures, and more
            </p>
          </a>
        </div>
        <div className="col-12 col-md-3 border rounded-3 singnup-box  m-2 m-md-5">
          <a href=" " className="text-black p-5 ">
            <h2 className=" fs-4 ms-3">Minor Account</h2>
            <img
              src="https://zerodha.com/static/images/acop-minor.svg"
              style={{ position: "relative", left: "-32px", width: "40px" }}
            />
            <p className="mb-3 fs-5  ms-3">
              Teach your little ones about money & invest for their future with
              them
            </p>
          </a>
        </div>
        <div className="col-12 col-md-3 border rounded-3 singnup-box  m-2 m-md-5">
          <a href=" " className="text-black p-5 ">
            <h2 className=" fs-4 ms-3">Corporate / LLP/ Partnership</h2>
            <img
              src="https://zerodha.com/static/images/acop-corporate.svg"
              style={{ position: "relative", left: "-32px", width: "40px" }}
            />
            <p className="mb-3 fs-5  ms-3">
              Manage your business surplus and investments easily
            </p>
          </a>
        </div>
      </div>

      <div className="row  text-center linktag my-5">
        <h1 className="fs-1 fw-semibold lh-lg">Open a Zerodha account</h1>
        <p className="fs-4 lh-base">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          to="/signup"
          className="p-2 border-0 fs-4 text-white rounded-1 fw-semibold my-3 "
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

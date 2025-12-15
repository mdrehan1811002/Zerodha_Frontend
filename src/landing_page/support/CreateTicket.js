import React, { useState } from "react";

const CreateTicket = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // // const toggleSupport = () => {
  // //   setIsOpen((prev) => !prev);
  // // };

  const [openSection, setOpenSection] = useState(null);

  const toggleSupport = (sectionName) => {
    setOpenSection((prev) => (prev === sectionName ? null : sectionName));
  };
  return (
    <div>
      <div style={{ backgroundColor: "#f2f2f2ff" }}>
        <div className="container">
          <div className="row" style={{ height: "50px" }}></div>
          {/* <div className="row">
          <div className="col text-white my-5">
            <h3 className="my-5">Support Portal</h3>

            <h3>
              Search for an answer or browse help topics to create a ticket
            </h3>
            <div
              className="w-100 my-3 d-flex "
              style={{
                height: "50px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            >
              <input
                type="text"
                className=""
                style={{
                  width: "90%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              />
              <button
                style={{
                  width: "10%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="col text-white">
            <h3 className="text-end">Track tickets</h3>
          </div>
        </div> */}

          <div className="row py-3">
            <div className="col col-lg-10">
              <h1>Support Portal</h1>
            </div>
            <div
              className="col col-lg-2"
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button
                className="btn btn-outline-dark p-2"
                style={{
                  width: "150px",
                  margin: "0 auto",
                  height: "50px",
                }}
              >
                <i class="fa-solid fa-bullseye"></i> My tickets
              </button>
            </div>
          </div>

          <div className="row py-5">
            <div className="col">
              <div
                style={{
                  width: "100%",
                  height: "60px",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
              >
                <button
                  style={{
                    width: "10%",
                    height: "100%",
                    border: "none",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    backgroundColor: "white",
                    fontSize: "18px",
                  }}
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  type="search"
                  placeholder="Eg: how do i activate F&O..."
                  style={{
                    width: "90%",
                    height: "100%",
                    border: "none",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    backgroundColor: "white",
                    outline: "none",
                    padding: "10px 30px",
                    fontSize: "18px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-lg-8">
            <div
              className="row w-100 border my-3"
              style={{ borderRadius: "10px" }}
              onClick={() => toggleSupport("Account")}
            >
              <div
                className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#ddf0ffff",
                  fontSize: "18px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  color: "#387ed1",
                }}
              >
                <i class="fa-solid fa-plus"></i>
              </div>
              <div className="col-8 col-md-10 py-2 px-4 text-start">
                <p className="my-2">Account Opening</p>
              </div>
              <div className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center">
                {/* <i class="fa-solid fa-angle-up"></i> */}

                <i
                  style={{ color: "#387ed1" }}
                  className={`fa-solid ${
                    openSection === "Account" ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
            </div>

            <div
              className={`px-4 ${
                openSection === "Account" ? "slide-down" : "slide-up"
              }`}
            >
              <ul className="supprt-link">
                <li className="py-3 fs-5">
                  <a href=""> Resident individual </a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Minor </a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Non Resident Indian (NRI) </a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Company, Partnership, HUF and LLP </a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Glossary </a>
                </li>
              </ul>
            </div>

            <div
              className="row w-100 border my-3"
              style={{ borderRadius: "10px" }}
              onClick={() => toggleSupport("Your")}
            >
              <div
                className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#ddf0ffff",
                  fontSize: "18px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <i class="fa-solid fa-plus"></i>
              </div>
              <div className="col-8 col-md-10 py-2 px-4 text-start">
                <p className="my-2">Your Zerodha Account</p>
              </div>
              <div className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center">
                {/* <i class="fa-solid fa-angle-up"></i> */}

                <i
                  className={`fa-solid ${
                    openSection === "Your" ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
            </div>

            <div
              className={`px-4 ${
                openSection === "Your" ? "slide-down" : "slide-up"
              }`}
            >
              <ul className="supprt-link">
                <li className="py-3 fs-5">
                  <a href="">Your Profile</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Account modification</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">
                    Client Master Report (CMR) and Depository Participant (DP)
                  </a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Nomination</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Transfer and conversion of securities </a>
                </li>
              </ul>
            </div>

            <div
              className="row w-100 border my-3"
              style={{ borderRadius: "10px" }}
              onClick={() => toggleSupport("Kite")}
            >
              <div
                className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#ddf0ffff",
                  fontSize: "18px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <i class="fa-solid fa-plus"></i>
              </div>
              <div className="col-8 col-md-10 py-2 px-4 text-start">
                <p className="my-2">Kite</p>
              </div>
              <div className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center">
                {/* <i class="fa-solid fa-angle-up"></i> */}

                <i
                  className={`fa-solid ${
                    openSection === "Kite" ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
            </div>

            <div
              className={`px-4 ${
                openSection === "Kite" ? "slide-down" : "slide-up"
              }`}
            >
              <ul className="supprt-link">
                <li className="py-3 fs-5">
                  <a href=""> IPO</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Trading FAQs</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Margin Trading Facility (MTF) and Margins</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Charts and orders</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Alerts and Nudges</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">General</a>
                </li>
              </ul>
            </div>

            <div
              className="row w-100 border my-3"
              style={{ borderRadius: "10px" }}
              onClick={() => toggleSupport("Funds")}
            >
              <div
                className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#ddf0ffff",
                  fontSize: "18px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <i class="fa-solid fa-plus"></i>
              </div>
              <div className="col-8 col-md-10 py-2 px-4 text-start">
                <p className="my-2">Funds</p>
              </div>
              <div className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center">
                {/* <i class="fa-solid fa-angle-up"></i> */}

                <i
                  className={`fa-solid ${
                    openSection === "Funds" ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
            </div>

            <div
              className={`px-4 ${
                openSection === "Funds" ? "slide-down" : "slide-up"
              }`}
            >
              <ul className="supprt-link">
                <li className="py-3 fs-5">
                  <a href=""> Add money</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Withdraw money</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Add bank accounts</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">eMandates </a>
                </li>
              </ul>
            </div>

            <div
              className="row w-100 border my-3"
              style={{ borderRadius: "10px" }}
              onClick={() => toggleSupport("Console")}
            >
              <div
                className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#ddf0ffff",
                  fontSize: "18px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <i class="fa-solid fa-plus"></i>
              </div>
              <div className="col-8 col-md-10 py-2 px-4 text-start">
                <p className="my-2">Console</p>
              </div>
              <div className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center">
                {/* <i class="fa-solid fa-angle-up"></i> */}

                <i
                  className={`fa-solid ${
                    openSection === "Console" ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
            </div>

            <div
              className={`px-4 ${
                openSection === "Console" ? "slide-down" : "slide-up"
              }`}
            >
              <ul className="supprt-link">
                <li className="py-3 fs-5">
                  <a href=""> Portfolio</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Corporate actions</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Funds statement</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Reports</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Profile</a>
                </li>

                <li className="py-3 fs-5">
                  <a href="">Segments</a>
                </li>
              </ul>
            </div>

            <div
              className="row w-100 border my-3"
              style={{ borderRadius: "10px" }}
              onClick={() => toggleSupport("Coin")}
            >
              <div
                className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#ddf0ffff",
                  fontSize: "18px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <i class="fa-solid fa-plus"></i>
              </div>
              <div className="col-8 col-md-10 py-2 px-4 text-start">
                <p className="my-2">Coin</p>
              </div>
              <div className="col-2 col-md-1 py-2 px-4 d-flex justify-content-center align-items-center">
                {/* <i class="fa-solid fa-angle-up"></i> */}

                <i
                  className={`fa-solid ${
                    openSection === "Coin" ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
            </div>

            <div
              className={`px-4 ${
                openSection === "Coin" ? "slide-down" : "slide-up"
              }`}
            >
              <ul className="supprt-link">
                <li className="py-3 fs-5">
                  <a href="">Mutual funds</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">National Pension Scheme (NPS)</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Fixed Deposit (FD)</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Features on Coin</a>
                </li>
                <li className="py-3 fs-5">
                  <a href="">Payments and Orders</a>
                </li>

                <li className="py-3 fs-5">
                  <a href="">General</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4 ">
            <div
              className="my-3"
              style={{
                backgroundColor: "#fcffd9ff",
                borderLeft: "10px solid #ff5454ff",
              }}
            >
              <ul>
                <li className="p-3 fs-5 ">
                  <a href="">Quarterly Settlement of Funds - July 2025</a>
                </li>
                <li className="p-3 fs-5">
                  <a href="">
                    Exclusion of F&O contracts on 8 securities from August 29,
                    2025
                  </a>
                </li>
              </ul>
            </div>

            <div className="my-3 border">
              <p
                className="p-3 fs-5 border-bottom"
                style={{ backgroundColor: "#f7f7f7ff" }}
              >
                Quick links
              </p>
              <ul>
                <li
                  className="p-3 fs-5 border-bottom"
                  style={{ listStyle: "none" }}
                >
                  <a href="">1. Track account opening</a>{" "}
                </li>

                <li
                  className="p-3 fs-5 border-bottom"
                  style={{ listStyle: "none" }}
                >
                  <a href="">2. Track segment activation</a>{" "}
                </li>
                <li
                  className="p-3 fs-5 border-bottom"
                  style={{ listStyle: "none" }}
                >
                  <a href="">3. Intraday margins</a>{" "}
                </li>
                <li
                  className="p-3 fs-5 border-bottom"
                  style={{ listStyle: "none" }}
                >
                  <a href="">4. Kite user manual</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;

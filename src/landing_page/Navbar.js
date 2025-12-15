import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed z-1"
      style={{
        backgroundColor: "#fff",
        boxShadow: "2px 1px 2px #eee",
        width: "100%",
      }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media\img\logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>

        <div className="collapse navbar-collapse">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>

        <ul className="navbar-nav ">
          <li className="nav-item position-relative">
            <button className="nav-link active" onClick={toggleMenu}>
              <i className={`fa-solid ${menuVisible ? "fa-x" : "fa-bars"}`}></i>
            </button>
            {menuVisible && (
              <div
                className="position-absolute container nav-sho2"
                style={{
                  width: "700px",
                  position: "absolute",
                  backgroundColor: "white",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  right: "7%",
                  top: "75px",
                  zIndex: 1000,
                }}
              >
                <div className="d-block d-lg-none">
                  <div className="row mx-5 text-center">
                    <div className="col-6 p-md-5 p-2">
                      <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link active" to="/signup">
                            Signup
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" to="/about">
                            About
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" to="/product">
                            Products
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 p-md-5 p-2">
                      <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link active" to="/pricing">
                            Pricing
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" to="/support">
                            Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row p-3 text-center popup">
                  <div className="col-5 col-md-3 ">
                    <a href="" className="text-decoration-none">
                      <img src="https://zerodha.com/static/images/products/kite-logo.svg" />
                      <p className="pt-2">Kite</p>
                      <span className="">Trading platform</span>
                    </a>
                  </div>
                  <div className="col-5 col-md-3">
                    <a href="" className="text-decoration-none">
                      <img src="https://zerodha.com/static/images/products/console.svg" />
                      <p className="pt-2">Console</p>
                      <span>Backoffice</span>
                    </a>
                  </div>
                  <div className="col-5 col-md-3">
                    <a href="" className="text-decoration-none">
                      <img src="https://zerodha.com/static/images/products/kite-connect.svg" />
                      <p className="pt-2">Kite Connect</p>
                      <span>Trading APIs</span>
                    </a>
                  </div>
                  <div className="col-5 col-md-3">
                    <a href="" className="text-decoration-none">
                      <img src="https://zerodha.com/static/images/products/coin.svg" />
                      <p className="pt-2">Coin</p>
                      <span className="">Mutual funds</span>
                    </a>
                  </div>

                  <div className="col-5 d-block d-md-none my-3">
                    <a href="" className="text-decoration-none">
                      <img src="https://zerodha.com/static/images/products/varsity.png" />
                      <p className="pt-2">Console</p>
                    </a>
                  </div>

                  <div className="col-5 d-block d-md-none  my-3">
                    <a href="" className="text-decoration-none">
                      <img src="https://zerodha.com/static/images/products/tqna.png" />
                      <p className="mt-3">Console</p>
                    </a>
                  </div>
                </div>

                <button
                  className="position-absolute border-0 bg-white fs-5"
                  style={{ top: "0px ", right: "20px" }}
                  onClick={toggleMenu}
                >
                  <i class="fa-solid fa-x"></i>
                </button>

                <div
                  className="row p-3  mt-3 "
                  style={{ backgroundColor: "#fafafb" }}
                >
                  <div className="col-6 col-md-4 my-3 ">
                    <h5>Utilities</h5>
                    <ul className="list-unstyled popup-list">
                      <li>
                        <a href=""> Calculators</a>
                      </li>
                      <li>
                        <a href=""> Brokerage calculator </a>{" "}
                      </li>
                      <li>
                        <a href=""> Margin calculator </a>{" "}
                      </li>
                      <li>
                        <a href=""> SIP calculator </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-4 my-3">
                    <h5>Updates</h5>
                    <ul className="list-unstyled  popup-list">
                      <li>
                        <a href=""> Z-Connect blog</a>
                      </li>
                      <li>
                        <a href="">Circulars / Bulletin </a>{" "}
                      </li>
                      <li>
                        <a href=""> IPOs </a>{" "}
                      </li>
                      <li>
                        <a href=""> Markets</a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-4 d-none d-md-block">
                    <h5>Education</h5>
                    <div className="row popup text-center mt-4">
                      <div className="col ">
                        <a href="" className="text-decoration-none">
                          <img src="https://zerodha.com/static/images/products/varsity.png" />
                          <p className="mt-3">Console</p>
                        </a>
                      </div>
                      <div className="col">
                        <a href="" className="text-decoration-none">
                          <img src="https://zerodha.com/static/images/products/tqna.png" />
                          <p className="mt-3">Console</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

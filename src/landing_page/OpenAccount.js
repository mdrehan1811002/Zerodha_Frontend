import { Link } from "react-router-dom";

export default function OpenAccount() {
  return (
    <div className="container p-5 mb-5 mt-5">
      <div className="row  text-center linktag">
        <h1 className="fs-1 fw-semibold lh-lg">Open a Zerodha account</h1>
        <p className="fs-4 lh-base">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          to="/register"
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

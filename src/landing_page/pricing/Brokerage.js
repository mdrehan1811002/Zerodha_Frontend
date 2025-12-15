import React, { useState } from "react";

const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("equity");
  return (
    <div className="container">
      <div className="row border-bottom my-5 ">
        <button
          className={`col-2 btn btn-outline-white m-4 border-0 fs-3  ${
            activeTab === "equity" ? "active-tab" : ""
          }`}
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </button>
        <button
          className={`col-2 btn btn-outline-white m-4 border-0 fs-3  ${
            activeTab === "currency" ? "active-tab" : ""
          }`}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </button>
        <button
          className={`col-2 btn btn-outline-white m-4 border-0 fs-3  ${
            activeTab === "commodity" ? "active-tab" : ""
          }`}
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </button>
      </div>
      {activeTab === "equity" && (
        <div className="row my-2">
          <div className="table-responsive ">
            <table className="table text-left table-striped">
              <thead>
                <tr className="fw-normal text-muted align-middle">
                  <th scope="col"></th>
                  <th scope="col" className="col-2 fw-semibold text-muted">
                    Equity delivery
                  </th>
                  <th scope="col" className="col-2 fw-semibold text-muted">
                    Equity intraday
                  </th>
                  <th scope="col" className="col-2 fw-semibold text-muted">
                    F&O - Futures
                  </th>
                  <th scope="col" className="col-2 fw-semibold text-muted">
                    F&O - Options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td className="col-2">Brokerage</td>
                  <td className="col-2">Zero Brokerage</td>
                  <td className="col-2">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td className="col-2">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td className="col-2">Flat Rs. 20 per executed order</td>
                </tr>
                <tr className="align-middle">
                  <td className="col-2">STT/CTT</td>
                  <td className="col-2">0.1% on buy & sell</td>
                  <td className="col-2">0.025% on the sell side</td>
                  <td className="col-2">0.02% on the sell side </td>
                  <td>
                    <ul>
                      <li>
                        0.125% of the intrinsic value on options that are bought
                        and exercised
                      </li>
                      <li>0.1% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>Transaction charges</td>
                  <td>
                    NSE: 0.00297% <br />
                    BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00297% <br />
                    BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00173% <br />
                    BSE: 0
                  </td>
                  <td>
                    NSE: 0.03503% (on premium)
                    <br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>

                <tr className="align-middle">
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>

                <tr className="align-middle">
                  <td>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <tr className="align-middle">
                  <td>Stamp charges</td>
                  <td>0.015% or ₹1500 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "currency" && (
        <div className="row my-2">
          <div className="table-responsive ">
            <table className="table text-left table-striped">
              <thead>
                <tr className="fw-normal text-muted align-middle">
                  <th scope="col"></th>
                  <th scope="col" className="col-2 fw-semibold text-muted">
                    Currency futures
                  </th>
                  <th scope="col" className="col-2 fw-semibold text-muted">
                    Currency options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td className="col-2">Brokerage</td>
                  <td className="col-2">
                    0.03% or ₹ 20/executed order whichever is lower
                  </td>
                  <td className="col-2">₹ 20/executed order</td>
                </tr>
                <tr className="align-middle">
                  <td className="col-2">STT/CTT</td>
                  <td className="col-2">No STT</td>
                  <td className="col-2">No STT</td>
                </tr>
                <tr className="align-middle">
                  <td>Transaction charges</td>
                  <td>
                    NSE: 0.00035% <br />
                    BSE: 0.00045%
                  </td>
                  <td>
                    NSE: 0.0311% <br />
                    BSE: 0.001%
                  </td>
                </tr>

                <tr className="align-middle">
                  <td>GST</td>
                  <td>
                    {" "}
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>

                <tr className="align-middle">
                  <td>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <tr className="align-middle">
                  <td>Stamp charges</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "commodity" && (
        <div className="row my-2">
          <div className="table-responsive ">
            <table className="table text-left table-striped">
              <thead>
                <tr className="fw-normal text-muted align-middle">
                  <th scope="col"></th>
                  <th scope="col" className="col-2 fw-semibold text-muted">
                    Commodity futures
                  </th>
                  <th scope="col" className="col-2 fw-semibold text-muted">
                    Currency options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td className="col-2">Brokerage</td>
                  <td className="col-2">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td className="col-2">₹ 20/executed order</td>
                </tr>
                <tr className="align-middle">
                  <td className="col-2">STT/CTT</td>
                  <td className="col-2">0.01% on sell side (Non-Agri)</td>
                  <td className="col-2">0.05% on sell side</td>
                </tr>
                <tr className="align-middle">
                  <td>Transaction charges</td>
                  <td>
                    MCX: 0.0021% <br />
                    NSE: 0.0001%
                  </td>
                  <td>
                    MCX: 0.0418% <br />
                    NSE: 0.001%
                  </td>
                </tr>

                <tr className="align-middle">
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>

                <tr className="align-middle">
                  <td>SEBI charges</td>
                  <td>
                    Agri:
                    <br />
                    ₹1 / crore
                    <br />
                    Non-agri:
                    <br />
                    ₹10 / crore
                  </td>
                  <td>₹10 / crore</td>
                </tr>
                <tr className="align-middle">
                  <td>Stamp charges</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="row">
        <p className="text-center fs-4">
          <a href="">Calculate your costs upfront </a>using our brokerage
          calculator
        </p>

        <div className="col-12 col-md-6 brokerage">
          <h1 className="text-left fs-2 my-5">Charges explained</h1>
          <h5>Securities/Commodities transaction tax</h5>
          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h5>Transaction/Turnover Charges</h5>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h5>Call & trade</h5>

          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h5>Stamp charges</h5>
          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <h5>NRI brokerage charges</h5>
          <p>
            <ul>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li> ₹100 per order for futures and options.</li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </p>
          <h5>Account with debit balance</h5>
          <p>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <h5>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
          <p>
            <ul>
              <li>
                {" "}
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </p>
          <h5>Margin Trading Facility (MTF)</h5>
          <p>
            <ul>
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied{" "}
              </li>
              <li>from T+1 day until the day MTF stocks are sold.</li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </p>
        </div>
        <div className="col-12 col-md-6  brokerage mt-5">
          <h5 className="mt-5 pt-5">GST</h5>
          <p>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <h5>SEBI Charges</h5>
          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h5>DP (Depository participant) charges</h5>

          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>

          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>

          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h5>Pledging charges</h5>
          <p>₹30 + GST per pledge request per ISIN.</p>

          <h5>AMC (Account maintenance charges)</h5>
          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, <a href="">Click here </a>
          </p>
          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC, <a href="">Click here </a>
          </p>
          <h5>Corporate action order charges</h5>
          <p>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h5>Off-market transfer charges</h5>
          <p>₹25 per transaction.</p>
          <h5>Physical CMR request</h5>
          <p>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h5>Payment gateway charges</h5>
          <p>₹9 + GST (Not levied on transfers done via UPI)</p>
          <h5>Delayed Payment Charges</h5>
          <p>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>
          <h5>Trading using 3-in-1 account with block functionality</h5>
          <p>
            <ul>
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="row brokerage">
        <h5 className="">Disclaimer</h5>
        <div className="col-12">
          <p>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>

      <h2 className="fs-3 mt-5 my-5 text-left">Charges for account opening</h2>
      <div className="row text-left border">
        <div className="col-10">
          <h6 className="fs-6 p-3 text-left">Type of account</h6>
        </div>
        <div className="col-2">
          <h6 className="fs-6 p-3 text-left">Charges</h6>
        </div>
      </div>
      <div className="row text-left border">
        <div className="col-10">
          <h6 className="fs-6 p-3 text-left">Online account</h6>
        </div>
        <div className="col-2">
          <h6 className="fs-6 p-3 text-left">
            <span className="free-tag">free</span>
          </h6>
        </div>
        <div className="col-10">
          <h6 className="fs-6 p-3 text-left">Offline account</h6>
        </div>
        <div className="col-2">
          <h6 className="fs-6 p-3 text-left">
            <span className="free-tag">free</span>
          </h6>
        </div>
        <div className="col-10">
          <h6 className="fs-6 p-3 text-left">NRI account (offline only)</h6>
        </div>
        <div className="col-2">
          <h6 className="fs-6 p-3 text-left">₹ 500</h6>
        </div>
        <div className="col-10">
          <h6 className="fs-6 p-3 text-left">
            Partnership, LLP, HUF, or Corporate accounts (offline only)
          </h6>
        </div>
        <div className="col-2">
          <h6 className="fs-6 p-3 text-left">₹ 500</h6>
        </div>
      </div>

      <h2 className="fs-3 mt-5 my-5 text-left">
        Charges for optional value added services
      </h2>
      <div className="row text-left border">
        <div className="col-3">
          <h6 className="fs-6 p-3 text-left">Service</h6>
        </div>
        <div className="col-3">
          <h6 className="fs-6 p-3 text-left">Billing Frquency</h6>
        </div>
        <div className="col-6">
          <h6 className="fs-6 p-3 text-left">Charges</h6>
        </div>
      </div>
      <div className="row text-left border mb-5">
        <div className="col-3">
          <h6 className="fs-6 p-3 text-left">Tickertape</h6>
        </div>
        <div className="col-3">
          <h6 className="fs-6 p-3 text-left">Monthly / Annual</h6>
        </div>
        <div className="col-6">
          <h6 className="fs-6 p-3 text-left">Free: 0 | Pro: 249/2399</h6>
        </div>
        <div className="col-3">
          <h6 className="fs-6 p-3 text-left">Smallcase</h6>
        </div>
        <div className="col-3">
          <h6 className="fs-6 p-3 text-left">Per transaction</h6>
        </div>
        <div className="col-6">
          <h6 className="fs-6 p-3 text-left">
            Buy & Invest More: 100 | SIP: 10
          </h6>
        </div>
        <div className="col-3">
          <h6 className="fs-6 p-3 text-left">Kite Connect</h6>
        </div>
        <div className="col-3">
          <h6 className="fs-6 p-3 text-left"> Monthly</h6>
        </div>
        <div className="col-6">
          <h6 className="fs-6 p-3 text-left">Connect: 500 | Historical: 500</h6>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;

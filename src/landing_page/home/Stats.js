import React from "react";
export default function Stats() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-md-6 col-12 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-md-6 col-12 text-center align-center p-5">
          <img src="media\img\ecosystem.png" className="w-75 " />
          <div style={{ margin: "2.5rem auto" }} className="fs-5">
            <a href="#" className="text-decoration-none mx-2 mx-md-5">
              Explore our products&nbsp;
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="#" className="text-decoration-none">
              Try Kite demo&nbsp;
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

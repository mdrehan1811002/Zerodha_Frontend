import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./loader.css"; // loader import

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  },
  formContainer: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  otpContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  otpInput: {
    width: "45px",
    height: "45px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.2s ease-in-out",
  },
  submitBtn: {
    marginTop: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    padding: "12px",
    width: "100%",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  resendSection: {
    marginTop: "20px",
  },
  resendButton: {
    background: "none",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "14px",
  },
  emailText: {
    fontSize: "14px",
    marginBottom: "15px",
    color: "#555",
  },
};

const OtpForm = ({ mode }) => {
  const { email } = useParams();
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loader state

  const frontUrl = process.env.REACT_APP_FRONTEND_URL;
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ loader start
    setError("");

    const otpString = otp.join("");
    if (otpString.length < 6) {
      setError("Please enter full 6-digit OTP");
      setLoading(false);
      return;
    }

    try {
      const url =
        mode === "login"
          ? `${apiUrl}/login/${encodeURIComponent(email)}/verify-otp`
          : `${apiUrl}/register/${encodeURIComponent(email)}/verify-otp`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otpString }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "OTP verification failed");
        setLoading(false);
        return;
      }

      if (mode === "login") {
        localStorage.setItem("token", data.token);
      }

      window.location.href = `${frontUrl}/?token=${encodeURIComponent(
        data.token
      )}`;
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false); // ✅ loader stop
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.formContainer}>
        <p style={styles.emailText}>
          OTP has been sent to <strong>{email}</strong>
        </p>

        <h2 style={styles.heading}>Enter OTP</h2>

        <form onSubmit={handleVerify}>
          <div style={styles.otpContainer}>
            {otp.map((digit, i) => (
              <input
                key={i}
                maxLength={1}
                inputMode="numeric"
                style={styles.otpInput}
                ref={(el) => (inputsRef.current[i] = el)}
                value={digit}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                type="text"
                autoFocus={i === 0}
              />
            ))}
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button style={styles.submitBtn} type="submit" disabled={loading}>
            {loading ? (
              <>
                <div className="custom-loader"></div>
                Verifying...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        <div style={styles.resendSection}>
          <button
            style={styles.resendButton}
            type="button"
            onClick={() => alert("Resend OTP clicked!")}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;

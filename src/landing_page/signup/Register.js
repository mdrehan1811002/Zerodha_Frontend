import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loader.css"; // loader CSS import

const styles = {
  global: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    textAlign: "center",
    color: "rgb(255, 140, 0)",
  },
  loginContainer: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  formContainer: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  formTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #bebebeff",
    boxSizing: "border-box",
    borderRadius: "6px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4caf50",
    border: "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  paragraph: {
    textAlign: "center",
    marginTop: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // If OTP sent successfully, go to verify page
      navigate(`/register/${encodeURIComponent(formData.email)}/verify`);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.global}>
      <div style={{ height: "30px" }}></div>
      <div style={styles.loginContainer}>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between gap-2">
              <input
                style={styles.input}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                style={styles.input}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              style={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {errorMsg && (
              <p style={{ color: "red", textAlign: "center" }}>{errorMsg}</p>
            )}

            <button style={styles.button} type="submit" disabled={loading}>
              {loading ? (
                <>
                  <div className="custom-loader"></div>
                </>
              ) : (
                "Sign Up"
              )}
            </button>

            <p style={styles.paragraph}>
              Already have an account?{" "}
              <Link style={styles.link} to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

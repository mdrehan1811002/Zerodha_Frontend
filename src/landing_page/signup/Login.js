// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   // Normally you'd send login request here:
//   //   // await axios.post("/login", { email, password });

//   //   // After successful login, redirect to OTP
//   //   navigate(`/login/${email}/verify`);
//   // };

//   const apiUrl = process.env.REACT_APP_API_URL;

//   const styles = {
//     global: {
//       margin: 0,
//       padding: 0,
//       boxSizing: "border-box",
//       textAlign: "center",
//       color: "rgb(255, 140, 0)",
//     },
//     loginContainer: {
//       fontFamily: "Arial, sans-serif",
//       backgroundColor: "#f4f4f4",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//     },
//     formContainer: {
//       background: "white",
//       padding: "30px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//       width: "100%",
//       maxWidth: "400px",
//     },
//     formTitle: {
//       textAlign: "center",
//       marginBottom: "20px",
//       color: "#333",
//     },
//     input: {
//       width: "100%",
//       padding: "12px",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//       boxSizing: "border-box",
//     },
//     button: {
//       width: "100%",
//       padding: "12px",
//       backgroundColor: "#4caf50",
//       border: "none",
//       color: "white",
//       fontWeight: "bold",
//       borderRadius: "6px",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//     paragraph: {
//       textAlign: "center",
//       marginTop: "10px",
//     },
//     link: {
//       color: "#007bff",
//       textDecoration: "none",
//     },
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`${apiUrl}/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.message || "Login failed");
//         return;
//       }

//       // OTP sent successfully, navigate to OTP verify page
//       navigate(`/login/${encodeURIComponent(email)}/verify`);
//     } catch (error) {
//       alert("Server error");
//     }
//   };

//   return (
//     <div style={styles.global}>
//       <div style={styles.loginContainer}>
//         <div style={styles.formContainer}>
//           <h2 style={styles.formTitle}>Login</h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={styles.input}
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={styles.input}
//             />
//             <button type="submit" style={styles.button}>
//               Login
//             </button>
//             <p style={styles.paragraph}>
//               Don't have an account?{" "}
//               <Link to={"/register"} style={styles.link}>
//                 Sign up
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./loader.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;

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
      border: "1px solid #ccc",
      borderRadius: "6px",
      boxSizing: "border-box",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      navigate(`/login/${encodeURIComponent(email)}/verify`);
    } catch (error) {
      alert("Server error");
      setLoading(false);
    }
  };

  return (
    <div style={styles.global}>
      <div style={styles.loginContainer}>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />

            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? (
                <>
                  <div className="custom-loader"></div>
                </>
              ) : (
                "Login"
              )}
            </button>

            <p style={styles.paragraph}>
              Don't have an account?{" "}
              <Link to={"/register"} style={styles.link}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

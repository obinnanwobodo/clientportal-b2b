'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Login.module.css";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // 👈 state for popup

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // show popup

    // Fake login delay (2 seconds)
    setTimeout(() => {
      router.push("/dashboard");
      setLoading(false); // hide popup
    }, 8000);
  };

  return (
    <div className={styles.loginWrapper}>
      

      <div className={styles.loginCard}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to your client portal</p>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Free to access for now, put any email"
            required   
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter any password for now"
            required
          />

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className={styles.forgot}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={styles.loginBtn}>
            Sign In
          </button>
        </form>

        <p className={styles.help}>
          Need help? <a href="#">Contact support</a>
        </p>
      </div>

      {/* 👇 Loading popup overlay */}
      {loading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingBox}>
            <div className={styles.spinner}></div>
            <p>⚠️  You’ll be logged in without authentication. <br />This is just a front-end demo with no back-end connection for now, <br />so you can access & see the page freely.”</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

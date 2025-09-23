'use client'

import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.headerLogo}>🛡️</div>

      <div className={styles.welcomeMessage}>
        <h1>Welcome Back</h1>
        <p>Sign in to your client portal</p>
      </div>

      <div className={styles.loginCard}>
        <h2>Sign In</h2>
        <p>Enter your email and password to access your account</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="name@company.com" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
              />
              <span
                className={styles.passwordToggleIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <div className={styles.optionsRow}>
            <div className={styles.rememberMe}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#" className={styles.forgotPassword}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={styles.signInButton}>
          <a href="/">  Sign In</a>
          </button>
        </form>

        <div className={styles.supportLink}>
          Need help? <a href="#">Contact support</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

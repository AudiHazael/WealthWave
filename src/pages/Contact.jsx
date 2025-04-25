import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>WealthWave | EBC EDGE Forex Strategy</title>
        <meta
          name="description"
          content="Master the EBC Forex Strategy with WealthWave Global Network and achieve financial freedom."
        />
        <link rel="canonical" href="https://your-website.com/wealthwave" />
      </Helmet>

      <Navbar />

      <div className="container mt-5">
        <h1>Contact Page</h1>
        <p>Get in touch with us!</p>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;

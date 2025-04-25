import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Blog() {
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
        <h1>Blog Page</h1>
        <p>Read our Articles and Research Documents</p>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;

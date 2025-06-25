import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function WealthWaveLanding() {
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

      <section className="cover-page container-fluid p-0">
        <div className="row p-0 m-0">
          {/* Left Side */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 left-side m-0">
            <div className="container">
              <h1 className="mt-2 pt-2">Master EBC EDGE FOREX STRATEGY</h1>
              <div className="button">
                <Link to="/home" className="btn-secondary px-4">
                  VISIT OUR WEBSITE !
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 right-side m-0">
            <div className="container d-flex flex-column justify-content-center align-item-center">
              <h2 className="mt-4 pt-4">EBC EDGE STRATEGY</h2>

              <div className="intro">
                <h4>
                  Wealth<span>Wave</span> Global Network
                </h4>
                <p className="small">
                  Welcome to WealthWave Global Network, your premier destination
                  for mastering the EBC Edge Strategy and achieving financial
                  freedom. This comprehensive program is designed to equip you
                  with the knowledge, skills, and support necessary to succeed
                  in the Boom and Crash Market.
                </p>
              </div>

              <div className="cta">
                <p className="large">
                  Ready to take the first step? Chat with our team to join our
                  orientation room and start your journey to financial success.
                </p>
                <a
                  href="https://wa.me/2348067370005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info text-white fw-bold px-4">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mobileOptimization d-none pt-4 pb-4 mt-4 mb-4">
          <p className="large pb-4">
            To know more about WealthWave Global Network and EBC EDGE Forex
            Strategy
          </p>
          <Link to="/home" className="btn-secondary  m-0">
            VISIT OUR WEBSITE !
          </Link>
        </div>
      </section>
    </div>
  );
}

export default WealthWaveLanding;

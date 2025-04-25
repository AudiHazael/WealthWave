import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Learning() {
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

      <section className="levels mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* Reusable Card */}
            {["Beginners", "Intermediate", "Advanced", "Exclusive"].map(
              (level, index) => (
                <div className="col-md-3 col-sm-6 col-10 mb-4" key={index}>
                  <div className="card mx-auto h-100">
                    <img
                      src="..."
                      className="card-img-top"
                      alt="forex strategy image"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <strong>WGN {level}</strong>
                        <br /> Some quick description of the forex class
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="resources mt-5 mb-5">
        <div className="container">
          <div className="row videos">
            <div className="col-md-6 col-12">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>

            <div className="col-md-6 col-12 mt-2">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos beatae at, esse vel impedit mollitia, magni ipsa
                dicta, soluta possimus aliquid totam magnam temporibus?
                Pariatur, maxime praesentium. Ipsam voluptate amet dolorum sit
                ut quos explicabo nisi non doloribus sapiente hic ab soluta
                voluptas, dolor praesentium officiis aliquid nam sint? Omnis!{" "}
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam magnam architecto placeat, molestias enim, iure, minus
                voluptatum quod autem sapiente accusamus unde exercitationem
                veritatis omnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta mt-5 mb-5">
        <div className="container">
          <h4>Unlock Your Wealth Journey with Us!</h4>
          <p>
            Ready to elevate your financial game? Connect with a member of the
            Wealth Wave Global Network team today and gain access to our
            exclusive classes, specialized resources, and a community built for
            growth. Whether you're just starting or scaling up, there's a class
            designed for you. <br />
            <strong>
              Click below to speak with us and reserve your spot now!
            </strong>
          </p>
          <a
            href="https://wa.me/2348067370005"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info text-white fw-bold px-4">
            CONTACT US
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Learning;

import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
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

      <section className="hero pt-4 pb-4 d-flex flex-column justify-content-center align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-10 col-12">
              <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <a
                href="https://wa.me/2348067370005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info text-white fw-bold px-4">
                CONTACT US
              </a>
            </div>
          </div>
          {/* <div className="row specials mt-5 ">
            <div className="col-3">
              <p>Boom & Crash</p>
            </div>
            <div className="col-3">
              <p>Volatility Indices</p>
            </div>
            <div className="col-3">
              <p>Step Indexes</p>
            </div>
            <div className="col-3">
              <p>Boom & Crash</p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="about-us pt-4 pb-4">
        <div className="container pt-4 pb-4 d-flex flex-column justify-content-center align-items">
          <div className="row">
            <div className="col-md-5 col-12 d-flex justify-content-center align-items center">
              <img src="" alt="" />
            </div>
            <div className="col-md-7 col-12 d-flex justify-content-center align-items center">
              <div>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat at incidunt voluptatem quasi doloremque ad asperiores
                  in non fugiat eligendi. <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  mollitia molestiae dignissimos aut iure ut quasi quam suscipit
                  non illo recusandae quis, aperiam commodi deleniti rerum
                  incidunt adipisci, ducimus consequuntur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strategies pt-4 pb-4">
        <div className="container">
          <div className="row justify-content-center">
            {[
              "EBC EDGE STRATEGY I & II",
              "EVA Strategy",
              "EVI Strategy",
              "EAS Strategy",
              "WaveMaster Strategy",
              "Synthetic Surge Strategy",
              "Volatility Vanguard Strategy",
            ].map((title, index) => (
              <div className="col-md-4 col-sm-6 col-10 mb-4" key={index}>
                <div className="card mx-auto h-100">
                  <img
                    src="..."
                    className="card-img-top"
                    alt="forex strategy image"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>{title}</strong>
                      <br />
                      Some quick description of the forex strategy
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="branding pt-4 mt-4">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-12 mb-4 mb-md-0 text-center text-md-start">
              <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Fugiat, dolores provident quia facere a modi quaerat aut, eaque
                recusandae repudiandae debitis numquam maxime fugit consequatur.
              </p>
              <a
                href="https://wa.me/2348067370005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info text-white fw-bold px-4 mb-4">
                CONTACT US
              </a>
            </div>
            <div className="col-md-6 col-12 text-center">
              <img
                src="/src/Images/Frame 690.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial pt-4 p-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-12">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <img
                        src="/src/Images/avatar.jpg"
                        alt="Avatar"
                        className="avatar me-md-4 mb-3 mb-md-0"
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                        }}
                      />
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur repudiandae nam excepturi odit earum illo
                        sit incidunt perspiciatis illum, fugiat distinctio
                        recusandae. Facilis, provident magnam.
                      </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <p className="text-center">Another testimonial here</p>
                  </div>

                  <div className="carousel-item">
                    <p className="text-center">Yet another testimonial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta pt-4 pb-4">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="text-center  d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-center">Reach out to Us Today</h5>
            <p className="text-center" style={{ Width: "50%" }}>
              Ready to take the first step? Chat with our team to know more
              about our forex strategy and join our orientation group to begin
              your journey of Financial Freedom.
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
      </section>

      <Footer />
    </div>
  );
}

export default Home;

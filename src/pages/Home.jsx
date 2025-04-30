import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AccordionFlush from "../components/accordion";

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
              <img src="..." alt="about us image" />
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

          <div className="row mt-5 justify-content-center">
            <div className="col-md-6 col-12">
              <h3>Why Trade with us?</h3>
              <p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas porro ex atque consequatur. Dolorem repellendus
                    nesciunt explicabo aliquam inventore magni optio numquam
                    consectetur eum eaque!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas porro ex atque consequatur. Dolorem repellendus
                    nesciunt explicabo aliquam inventore magni optio numquam
                    consectetur eum eaque!
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img src="..." alt="trade with us image" />
            </div>
          </div>
        </div>
      </section>

      <section className="services pt-4 pb-4 text-center">
        <div className="container">
          <h3 className="mb-3">Our Services</h3>
          <p className="mb-5">
            WealthWave Global Network offers expert financial and investment
            advice to help clients achieve their financial goals.
          </p>

          <div className="row justify-content-center">
            {[
              {
                img: "../Images/img1",
                title: "Investment Portfolio Management",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit sed suscipit tempore excepturi voluptate quisquam delectus vel repellat reprehenderit.",
              },
              {
                img: "../Images/img1",
                title: "Forex Trading",
                desc: "Strategically planning for a secure and comfortable retirement with tailored investment and savings options.",
              },
              {
                img: "../Images/img1",
                title: "Risk Assessment & Mitigation",
                desc: "Helping you minimize financial losses by identifying, analyzing, and mitigating investment risks.",
              },
              {
                img: "../Images/img1",
                title: "Financial Planning & Strategy Development",
                desc: "Equipping clients with financial literacy to make informed wealth-building decisions.",
              },
              {
                img: "../Images/img1",
                title: "Market Analysis & Trent Forecasting",
                desc: "Expert insights on navigating cryptocurrency markets to maximize returns safely.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
                <div
                  className="card p-3 border-0 text-center"
                  style={{ maxWidth: "22rem" }}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="img-fluid mb-3 mx-auto"
                    style={{ height: "50px", objectFit: "cover" }}
                  />
                  <h5>{service.title}</h5>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="branding d-flex align-items-center"
        style={{ minHeight: "80vh" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center text-md-start">
            <div className="col-md-6 col-12 mb-4 mb-md-0 d-flex flex-column justify-content-center">
              <h3 className="mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </h3>
              <p className="mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Fugiat, dolores provident quia facere a modi quaerat aut, eaque
                recusandae repudiandae debitis numquam maxime fugit consequatur.
              </p>
              <a
                href="https://wa.me/2348067370005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info text-white fw-bold px-4 align-self-center align-self-md-start">
                CONTACT US
              </a>
            </div>

            <div className="col-md-6 col-12 text-center">
              <img
                src="/src/Images/Frame 690.png"
                alt="Brand"
                className="img-fluid"
                style={{ maxWidth: "90%", height: "auto" }}
              />
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

      <AccordionFlush />

      <section className="cta pt-4 pb-4">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-center">Reach out to Us Today</h5>
            <p
              className="text-center"
              style={{ width: "100%", maxWidth: "500px" }}>
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

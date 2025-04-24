import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Helmet>
        <title>WealthWave | EBC Forex Strategy</title>
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
              {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            minima obcaecati <br /> aliquam necessitatibus est aliquid autem
            ducimus <br />
            exercitationem ipsum tempora!
          </p> */}
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
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-4 col-12">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="..."
                  className="card-img-top"
                  alt="forex strategy image"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick description of the forex strategy
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="..."
                  className="card-img-top"
                  alt="forex strategy image"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick description of the forex strategy
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="..."
                  className="card-img-top"
                  alt="forex strategy image"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick description of the forex strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="branding pt-4 mt-4 d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-12 ">
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
            <div className="col-md-6 col-12">
              <img src="/src/Images/Frame 690.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial pt-4 p-2">
        <div className="container">
          <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className="col-md-8 text col-12">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active d-flex justify-content-center align-items-center">
                    <img
                      src="/src/Images/avatar.jpg"
                      alt="Avatar"
                      className="avatar me-4"
                    />
                    <p className="p-o m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur repudiandae nam excepturi odit earum illo sit
                      incidunt perspiciatis illum, fugiat distinctio recusandae.
                      Facilis, provident magnam.
                    </p>
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="avatar" />
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="avatar" />
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
            <p className="text-center" style={{ Width: "75%" }}>
              Ready to take the first step? Chat with our team to know more <br />
              about EBC strategy and join our orientation group to begin your <br />
              journey of Financial Freedom.
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

import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
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

      {/* <section className="hero">
        <div className="container mt-5">
          <h1>About Page</h1>
          <p>Learn more about this project template!</p>
        </div>
      </section> */}

      <section className="about-page mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12">
              <img src="" alt="" />
            </div>
            <div className="col-md-6 col-12 justify-content center">
              {[
                {
                  title: "Mision",
                  content:
                    "Empowering individuals worldwide to achieve financial freedom and prosperity through education, community, and support.",
                },
                {
                  title: "Mission",
                  content:
                    "To provide accessible, high-quality financial education and training, enabling individuals to make informed investment decisions, build wealth, and achieve long-term financial independence.",
                },
                {
                  title: "Purpose",
                  content:
                    "To bridge the financial knowledge gap and create a community of like-minded individuals who support and uplift each other in their financial journeys.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="row justify-content-start">
            <h4>Our Values</h4>
            {[
              {
                title: "Integrity",
                content:
                  "Honest and transparent in all our dealings. We prioritize trust and credibility in our relationships with clients, partners, and each other.",
              },
              {
                title: "Excellence",
                content:
                  "Commitment to delivering high-quality education and support. We strive for continuous improvement and innovation to exceed our clients' expectations.",
              },
              {
                title: "Community",
                content:
                  "Fostering a supportive and inclusive environment. We believe in the power of community and collaboration to achieve financial goals.",
              },
              {
                title: "Innovation",
                content:
                  "Embracing new ideas and technologies to enhance financial education. We stay ahead of the curve to provide cutting-edge solutions for our clients.",
              },
              {
                title: "Empowerment",
                content:
                  "Equipping individuals with the knowledge and skills to take control of their financial lives. We empower our clients to make informed decisions and achieve financial freedom.",
              },
            ].map((value, index) => (
              <div key={index} className="col-md-6 col-12 mb-4">
                <h5>{value.title}</h5>
                <p>{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;

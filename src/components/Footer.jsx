import "../styles/styles.scss";

function Footer() {
  return (
    <section className="footer pt-4">
      <div className="container pt-4 pb-4 d-flex flex-column justify-content-between align-items-center">
        <div
          className="socials"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"></div>

        <div className="row g-4 d-flex justify-content-between">
          <div className="col-md-4 col-12 p-4 m-0 footHero">
            <a className="navbar-brand" href="index.html">
              <img src="/Images/Logo-Image.png" alt="" className="logo" />
            </a>
            <h3>WealthWave Network</h3>
            <p>
              Learn and Master EBC Forex Strategy - the route to financial
              freedom.
            </p>
          </div>

          <div className="col-md-4 col-12 mt-4 links">
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-12 mn-4 contact-info P-4">
            <p>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
            <p>+1012 3456 789</p>
            <p>demo@gmail.com</p>
          </div>
        </div>

        <div className="copyright p-0 m-0 d-flex justify-content-center">
          <p className="pt-2">
            © Copyrights 2025 SoyJoy | Designed by{" "}
            <a href="https://wa.link/8k0f7s" target="_blank" rel="nofollow">
              Hazael Audi
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

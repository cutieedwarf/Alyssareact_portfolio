import "./Experience.css";
import Navbar from "./Navbar";

import port17 from "../images/portfolio/portfolio-17.jpg";
import port18 from "../images/portfolio/portfolio-18.jpg";
import port19 from "../images/portfolio/portfolio-19.jpg";
import port20 from "../images/portfolio/portfolio-20.jpg";
import port21 from "../images/portfolio/portfolio-21.jpg";
import port22 from "../images/portfolio/portfolio-22.jpg";

/*import port1 from "../images/portfolio/portfolio-1.jpg";
import port2 from "../images/portfolio/portfolio-2.jpg";
import port3 from "../images/portfolio/portfolio-3.jpg";
import port4 from "../images/portfolio/portfolio-4.jpg";
import port5 from "../images/portfolio/portfolio-5.jpg";
import port6 from "../images/portfolio/portfolio-6.jpg";*/


const Experience = () => {
  return (
    <>
      <Navbar />

      <section id="experience">
        <div className="container">
        <div className="container mt-5 pt-4">
            <div className="row">
              <h1>My Experiences :</h1>
            </div>
          </div>
          <div className="pb-5">
            <br />
          </div>
          <div className="isotope">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={port17} alt="one" />
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={port18} alt="two" />
                </div>
              </div>
              
              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={port19} alt="three" />
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={port20} alt="four" />
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={port21} alt="five" />
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={port22} alt="six" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; Copyright By:
              <a href="/" className="ms-2">
                <span>Alyssa jane Vicentino</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;

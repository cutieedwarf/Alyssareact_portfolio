import "./Portfolio.css";
import Navbar from "./Navbar";

import portfolio11 from "../images/portfolio/portfolio-11.png";
import portfolio12 from "../images/portfolio/portfolio-12.png";
import portfolio13 from "../images/portfolio/portfolio-13.png";
import portfolio14 from "../images/portfolio/portfolio-14.png";
import portfolio15 from "../images/portfolio/portfolio-15.png";
import portfolio16 from "../images/portfolio/portfolio-16.png";
/*import portfolio1 from "../images/portfolio/portfolio-1.jpg";*/
/*import portfolio2 from "../images/portfolio/portfolio-2.jpg";
import portfolio3 from "../images/portfolio/portfolio-3.jpg";
import portfolio4 from "../images/portfolio/portfolio-4.jpg";
import portfolio5 from "../images/portfolio/portfolio-5.jpg";
import portfolio6 from "../images/portfolio/portfolio-6.jpg";*/

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <section id="portfolio">
        <div className="container">
        <div className="container mt-5 pt-4">
            <div className="row">
              <h1>My Projects :</h1>
            </div>
          </div>
          <div className="pb-5">
            <br />
          </div>
          <div className="isotope">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={portfolio11} alt="one" />
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={portfolio12} alt="two" />
                </div>
              </div>
              
              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={portfolio13} alt="three" />
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={portfolio14} alt="four" />
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={portfolio15} alt="five" />
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                <img src={portfolio16} alt="six" />
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

export default Portfolio;

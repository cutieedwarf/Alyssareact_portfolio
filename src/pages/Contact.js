import React from "react";
import "./Contact.css";

import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact section" id="contact">
        <div className="container">
          <div className="container">
            <div className="row">
              <h1>Contact Me :</h1>
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">
            Have You Any Questions ?
          </h3>
          <h4 className="contact-sub-title padd-15 fw-bold">
            I'M AT YOUR SERVICES
          </h4>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <a href="https://www.facebook.com/jane.otaku?mibextid=ZbWKwl"><FontAwesomeIcon className="i" icon={faFacebook} /></a>
              </div>
              <h4>Facebook</h4>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <a href="https://www.tiktok.com/@cutieegirl058?_t=8ngMHcHYEkr&_r=1"><FontAwesomeIcon className="i" icon={faTiktok} /></a>
              </div>
              <h4>TikTok</h4>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <a href="https://www.instagram.com/vicentinokyungsoojane?igsh=MWZmdWcweTNpMjdleQ=="><FontAwesomeIcon className="i" icon={faInstagram} /></a>
              </div>
              <h4>Instagram</h4>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <a href="https://github.com/cutieedwarf?tab=repositories"><FontAwesomeIcon className="i" icon={faGithub} /></a>
              </div>
              <h4>Github</h4>   
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15 fw-bold">
            I'M VERY RESPONSIVE TO MESSAGES
          </h4>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="container one">
              <div className="row button">
                <div className="form-item col-12">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
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

export default Contact;

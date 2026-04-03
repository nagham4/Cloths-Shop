import React from "react";
import './Footer.css';

import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint, FaAddressCard } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-start text-lg-start bg-body-tertiary text-muted pt-1 my-5 position-relative">

      <section className="newsletter-section d-flex justify-content-center align-items-center">
        <form className="w-100">
          <div
            className="newsletter-box d-flex justify-content-around align-items-center flex-wrap bg-black text-white text-center mx-auto"
            style={{
              borderRadius: "25px",
              width: "85%",
              padding: "2rem",
              height: "auto"
            }}
          >
            {/* Text */}
            <div className="col-12 col-md-6 mb-3 mb-md-0 text-md-start text-center ppp">
              <p className="mb-0 fw-bold " style={{ fontFamily: "BBH Sans Hegarty", fontSize: "3rem" }}>
                STAY UP TO DATE ABOUT OUR LATEST OFFERS
              </p>
            </div>

            {/* Input and Button */}
            <div className="col-12 col-md-5 form" style={{ width: "30rem" }}>
              <div className="position-relative mb-3 inp">
                <FaEnvelope className="input-icon fs-4" />
                <input
                  type="email"
                  className="form-control ps-5 fs-5"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <button type="submit" className="btn bg-white text-dark rounded-pill w-100 fs-5" style={{ height: "3.6rem" }}>
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </form>
      </section>


      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row text-center text-md-start justify-content-between">
            <div className="col-12 col-lg-3 mb-4 text-start">
              <h6 className="mb-3 logoo fs-2 mx-0 color-black">
                SHOP.CO
              </h6>
              <p>
                We have cloths that suits your style and which you're proud to wear. From women to men.
              </p>
              <div className="d-flex justify-content-md-start gap-3 socials mt-3 text-start">
                <a href="#" className="circle-link ii"><FaTwitter /></a>
                <a href="#" className="circle-link ii"><FaFacebookF /></a>
                <a href="#" className="circle-link ii"><FaInstagram /></a>
                <a href="#" className="circle-link ii"><FaGithub /></a>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 mb-4 text-start">
              <h6 className="text-uppercase mb-4 fs-4" style={{ fontFamily: 'Artarumian' }}>Company</h6>
              <p><a href="#!" className="text-reset text-decoration-none">About</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Features</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Works</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Career</a></p>
            </div>

            <div className="col-6 col-md-3 col-lg-2 mb-4 text-start">
              <h6 className="text-uppercase mb-4 fs-4" style={{ fontFamily: 'Artarumian' }}>Help</h6>
              <p><a href="#!" className="text-reset text-decoration-none">Customer Support</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Delivery Details</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Terms & Conditions</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Privacy Policy</a></p>
            </div>

            <div className="col-6 col-md-3 col-lg-2 mb-4 text-start">
              <h6 className="text-uppercase mb-4 fs-4" style={{ fontFamily: 'Artarumian' }}>FAQ</h6>
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>

            <div className="col-6 col-md-3 col-lg-2 mb-4 text-start">
              <h6 className="text-uppercase mb-4 fs-4" style={{ fontFamily: 'Artarumian' }}>RESOURCES</h6>
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="p-4 text-md-center text-sm-center text-lg-start"
      >
        <hr />
        Shop.co@2000-2023, All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;


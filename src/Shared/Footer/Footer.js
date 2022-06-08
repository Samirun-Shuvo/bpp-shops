import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/images/logo/logo.png";
import excelitlogo from "../../../src/images/footer/company-logo-img/excel-it-logo.png";
import excelitlogowithtext from "../../../src/images/footer/company-logo-img/excel-it-with-text.png";
import appleAppStoreImg from "../../../src/images/app-store-img/apple-app-store.png";
import googlePlayStoreImg from "../../../src/images/app-store-img/google-play-store.png";
import tCash from "../../../src/images/footer/sponser-img/bppshops_-_cash.webp";
import abBank from "../../../src/images/footer/sponser-img/bppshops_ab_bank.webp";
import bKash from "../../../src/images/footer/sponser-img/bppshops_bk.webp";
import bankAsia from "../../../src/images/footer/sponser-img/bppshops_bk_asia.webp";
import bracBank from "../../../src/images/footer/sponser-img/bppshops_brack_bank.webp";
import cityBank from "../../../src/images/footer/sponser-img/bppshops_city_bank.webp";
import dbbl from "../../../src/images/footer/sponser-img/bppshops_dbbl.webp";
import fastCash from "../../../src/images/footer/sponser-img/bppshops_fast.webp";
import islamicBank from "../../../src/images/footer/sponser-img/bppshops_islamic.webp";
import mCash from "../../../src/images/footer/sponser-img/bppshops_m_cash.webp";
import mtb from "../../../src/images/footer/sponser-img/bppshops_mtb.webp";
import myCash from "../../../src/images/footer/sponser-img/bppshops_my.webp";
import upay from "../../../src/images/footer/sponser-img/bppshops_oupy.webp";
import qCash from "../../../src/images/footer/sponser-img/bppshops_q.webp";
import ssl from "../../../src/images/footer/sponser-img/bppshops_ssl.webp";
import sureCash from "../../../src/images/footer/sponser-img/bppshops_sure_cash.webp";
import { Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row bg-dark text-white p-5">
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-5">
              <img style={{ height: "40px" }} src={logo} alt="" />
            </div>
            <div className="fs-4">
              <span className="m-1 bg-primary px-1 border rounded">
                <i className="bi bi-facebook"></i>
              </span>
              <span className="m-1 bg-warning px-1 border rounded">
                <i className="bi bi-youtube"></i>
              </span>
              <span className="m-1 bg-secondary px-1 border rounded">
                <i className="bi bi-twitter"></i>
              </span>
              <span className="m-1 bg-info px-1 border rounded">
                <i className="bi bi-linkedin"></i>
              </span>
            </div>
            <div className="mt-4">
              <p className="d-flex justify-content-start">
                <i className="bi bi-geo-alt-fill text-warning"></i>
                <span className="ms-2 text-white">
                17, Alhaz Samsuddin Mansion (9th Floor)Moghbazar,
                  New Easkaton,Ramna,Dhaka-1217
                </span>
              </p>
              <p className="d-flex justify-content-start">
                <i className="bi bi-envelope-open-fill text-warning"></i>
                <span className="ms-2 text-white">support@bppshops.com</span>
              </p>
              <p className="d-flex justify-content-start">
                <i className="bi bi-telephone-fill text-warning"></i>
                <span className="ms-2 text-white">09678822444</span>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <h5 className="text-warning">WE ARE HERE TO HELP !</h5>
            <h5>FAQ</h5>
            <h5 className="text-warning">24/7 CUSTOMER SUPPORT</h5>
            <h5 className="text-white">
              <span>
                <i className="bi bi-telephone text-warning"></i>
              </span>{" "}
              09678822444
            </h5>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <h5 className="text-warning mb-2">KNOW US BETTER</h5>
            <ul>
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "#00FFFF",
                }}
                to={"/aboutUs"}
              >
                <li>About Us</li>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "#00FFFF",
                }}
                to={"/contactUs"}
              >
                <li>Contact Us</li>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "#00FFFF",
                }}
                to={"/privacyPolicy"}
              >
                <li>Privacy Policy</li>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "#00FFFF",
                }}
                to={"/termsConditions"}
              >
                <li>Terms and Conditions</li>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "#00FFFF",
                }}
                to={"/returnPolicy"}
              >
                <li>Return Policy</li>
              </Link>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <h5 className="text-warning mb-2">MAKE MONEY WITH US</h5>
            <ul>
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "#00FFFF",
                }}
                to={"/sellOnBPPSHOPS"}
              >
                <li>Sell on BPPSHOPS</li>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "#00FFFF",
                }}
                to={"/sellerTermConditions"}
              >
                <li>Seller term & conditions</li>
              </Link>
            </ul>
            <Button variant="outline-warning" size="lg">
              SUBSCRIBE
            </Button>{" "}
            <div className="mt-3">
              <img src={appleAppStoreImg} alt="" />
            </div>
            <div className="mt-2">
              <img src={googlePlayStoreImg} alt="" />
            </div>
          </div>
          <div className="row border bg-white text-dark sponsor mt-3 mb-2">
            <div className="sponserImg">
              <span className="text-dark">Pay with</span>
              <img src={tCash} alt="" />
              <img src={abBank} alt="" />
              <img src={bKash} alt="" />
              <img src={bankAsia} alt="" />
              <img src={bracBank} alt="" />
              <img src={cityBank} alt="" />
              <img src={dbbl} alt="" />
              <img src={fastCash} alt="" />
              <img src={islamicBank} alt="" />
              <img src={mCash} alt="" />
              <img src={mtb} alt="" />
              <img src={myCash} alt="" />
              <img src={upay} alt="" />
              <img src={qCash} alt="" />
              <img src={ssl} alt="" />
              <img src={sureCash} alt="" />
            </div>
          </div>
        </div>
        <div className="row bg-secondary text-white p-3">
          <div className="col-sm-12 col-lg-4 mt-4">
            <p className="d-flex justify-content-start align-items-center ps-5 copyRightText">
              © All Right Reserved BPPSHOPS
            </p>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="d-flex justify-content-center">
              <img src={excelitlogo} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <p>Our logistics Partner</p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="d-flex justify-content-center">
              <img src={excelitlogowithtext} alt="" />
            </div>
            <div className="d-flex justify-content-center">Our IT Partner</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

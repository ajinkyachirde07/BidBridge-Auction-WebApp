import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-white ">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>BidBridge Auction Platform</h5>
            <p className=" ">
              A platform for buying and selling items through online auctions.
            </p>
          </div>
          <div className="col-md-2 mb-3 mb-md-0 text-white ">
            <h5>Links</h5>
            <ul className="list-unstyled text-white ">
              <li><Link className="text-decoration-none  text-white " to="/">Home</Link></li>
              <li><Link className="text-decoration-none text-white  " to="/auctions">Auctions</Link></li>
              <li><Link className="text-decoration-none text-white " to="/products">Products</Link></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3 mb-md-0">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><Link className="text-decoration-none text-white " to="/login">Login</Link></li>
              <li><Link className="text-decoration-none text-white  " to="/register">Register</Link></li>
              <li><Link className="text-decoration-none  text-white " to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled ">
              <li>Email: ajinkyachirde@gmail.com</li>
              <li>Phone: +91 7666453803</li>
              <li>Address: Yavatmal, Maharashtra, India </li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 ">
              &copy; {new Date().getFullYear()} BidBridge Auction Platform. All rights reserved.
            </p>
          </div>


          
          <div className="col-md-6 text-center text-md-end text-white ">
            <ul className="list-inline mb-0 text-white ">
              <li className="list-inline-item text-white">
                <a href="https://www.facebook.com/ajinkya.chirde" className=" text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="https://x.com/ajinkya_chirde7" className=" text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="https://www.instagram.com/ajinkya_chirde/" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="https://www.linkedin.com/in/ajinkya-chirde/" className=" text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
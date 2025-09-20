import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Address */}
        <div className="col-span-2 md:col-span-1">
          <img src="icon.png" alt="TSSC Logo" className="h-20 mb-4" />
          <p className="text-sm leading-6">
            Corporate Office VaishnoDevi Centre 12, Bhubaneswar,
            <br />
            Odisha, INDIA
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Business</a></li>
            <li><a href="#" className="hover:text-gray-400">Product & Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold text-lg mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">Crash Guard</a></li>
            <li><a href="#" className="hover:text-gray-400">Asbestos Roofing Sheet</a></li>
            <li><a href="#" className="hover:text-gray-400">Structural Steels</a></li>
            <li><a href="#" className="hover:text-gray-400">Mild Steel Plates</a></li>
            <li><a href="#" className="hover:text-gray-400">MS Pipes</a></li>
          </ul>
        </div>

        {/* Connect & Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Connect with us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
          </div>
          <div className="space-y-2 text-sm">
            <p>Contact us</p>
            <p>+91 1234 5678</p>
            <p>+91 1234 8956</p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@vaisnodevisteel@gmail.com
            </p>
          </div>
        </div>
      </div>
 
    </footer>
  );
}

export default Footer;

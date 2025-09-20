import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-blue-900 to-blue-800 font-sans text-white py-10 px-6 bg-cover"
      style={{ backgroundImage: "url('footer_image.png')" }}
    >
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 xs:grid-cols-4 md:grid-cols-4 gap-8 w-full px-3 xs:px-5 md:px-12 text-center xs:text-left">
        
        {/* Logo + Address */}
        <div className="space-y-2">
          <img
            src="shankar_logo2.png"
            alt="TSSC Logo"
            className="w-24 mx-auto xs:mx-0 mb-4"
          />
          <address className="not-italic text-xs sm:text-sm md:text-base leading-relaxed">
            Corporate Office <br />
            VaishnoDevi Centre 12, <br />
            Bhubaneswar, Odisha, INDIA
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-xs sm:text-sm md:text-base">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Business</a></li>
            <li><a href="#" className="hover:text-gray-300">Product & Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-4">Products</h3>
          <ul className="space-y-2 text-xs sm:text-sm md:text-base">
            <li><a href="#" className="hover:text-gray-300">Crash Guard</a></li>
            <li><a href="#" className="hover:text-gray-300">Asbestos Roofing Sheet</a></li>
            <li><a href="#" className="hover:text-gray-300">Structural Steels</a></li>
            <li><a href="#" className="hover:text-gray-300">Mild Steel Plates</a></li>
            <li><a href="#" className="hover:text-gray-300">Hardware Products</a></li>
            <li><a href="#" className="hover:text-gray-300">MS Pipes</a></li>
          </ul>
        </div>

        {/* Connect with us */}
        <div className="space-y-2">
          <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-3">Connect with us</h3>
          <div className="flex justify-center xs:justify-start space-x-4 mb-4 text-lg sm:text-xl md:text-2xl">
            <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-gray-300" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-gray-300" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="hover:text-gray-300" /></a>
          </div>
          <p className="text-xs sm:text-sm md:text-base">Contact us</p>
          <p className="text-xs sm:text-sm md:text-base"><a href="tel:+9112345678">+91 1234 5678</a></p>
          <p className="text-xs sm:text-sm md:text-base"><a href="tel:+9112348956">+91 1234 8956</a></p>
          <p className="text-xs sm:text-sm md:text-base">
            <a href="mailto:info@vaishnodevisteel@gmail.com">
              info@vaishnodevi<br/>steel@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { BsInstagram, BsTwitter, BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Logo" className="" />
            {/* <span className="text-xl font-semibold">Jago welfare</span> */}
          </div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consec elit sed eiusmod tempor incididunt
            ut labore etdolore magna aliqua.
          </p>
          <p className="text-sm font-semibold">Address:</p>
          <p className="text-sm mb-1">Kwamayaka Nyamirambo, Kigali, Rwanda 14580</p>
          <p className="text-sm font-semibold">Phone:</p>
          <p className="text-sm mb-1">+011 234-567-890</p>
          <p className="text-sm font-semibold">Email:</p>
          <p className="text-sm">info@example.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>News</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Help & FAQ</li>
            <li>Causes</li>
            <li>Events</li>
            <li>Contact us</li>
            <li>Terms of service</li>
          </ul>
        </div>

        {/* Latest Tweets */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Latest tweets</h3>
          <p className="text-red-500 text-sm mb-1">#digitalmarketing</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consec elit sed eiusmod tempor incididunt
            ut labore etdolore magna aliqua. Sit amet consec elit sed eiusmod
            tempor
          </p>
          <p className="text-red-500 text-sm mt-2">
            twitter.com/i/#puredrinkingwater
          </p>
          <p className="text-black font-semibold text-sm mt-1">
            April 4, 2025 8:45 PM
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-red-600 text-white py-4 flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm">Copyright © 2025 All Rights Reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <FaFacebookSquare />
          <BsTwitterX />
          <LiaLinkedin />
          <BsInstagram />
        </div>
      </div>
    </footer>
  );
}

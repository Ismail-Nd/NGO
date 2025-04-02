import React from "react";
import { BiPhone, BiSearch } from "react-icons/bi";
import { BsInstagram, BsTwitter, BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";

function navbar() {
  return (
    <>
      <nav className="flex px-50 py-5 justify-between text-[16px] items-center bg-white text-gray-500 border-b-1 border-gray-300">
        <div className="flex items-center gap-2.5 font-medium">
          <div className="flex gap-2 items-center">
            <MdEmail />
            <a href="">ndismail007@gmial.com</a>
          </div>
          <div className="flex gap-2 items-center">
            <BiPhone />
            <a href="">123-456-7890</a>
          </div>
          <div className="flex gap-2 items-center'>">
            <a href="">Faqs</a>
          </div>
        </div>
        <div className="flex gap-4">
          <FaFacebookSquare />
          <BsTwitterX />
          <LiaLinkedin />
          <BsInstagram />
        </div>
      </nav>
      <nav className="items-center px-50 bg-white">
        <div className="flex justify-between items-center text-[20px] py-5 bg-white font-medium text-gray-700 border-b-1 border-gray-300">
          <ul className="flex justify-between gap-10 items-center">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Causes</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="flex gap-4 items-center">
            <a href="">
              <BiSearch size={30} />
            </a>
            <button className="cursor-pointer border-1 font-normal border-red-500 bg-white text-md text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out rounded-sm py-1 px-2 ">
              Donate now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;

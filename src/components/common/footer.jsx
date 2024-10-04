import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 text-white mt-8 lg:px-11 lg:pt-11 md:p-5 p-2">
        <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2">
          <div>
            <h1 className="font-semibold text-xl mb-2">Ec-Shop</h1>
            <p className="text-sm text-wrap">
              Your one-stop shop for all your need, Shop with us and experience
              the best online shopping experience.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl mb-2"> Quick Links</h1>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-red-600 duration-300">
                Home
              </Link>
              <Link to="/Shop" className="hover:text-red-600 duration-300">
                Shop
              </Link>
              <Link to="/About" className="hover:text-red-600 duration-300">
                About Us
              </Link>
              <Link to="/Contact" className="hover:text-red-600 duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-xl mb-2"> Follow Us</h1>
            <div className="flex text-2xl gap-3 mb-4">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <RiTwitterXLine />
            </div>
            <div className="h-8 flex w-72">
              <input
                placeholder="your email"
                type="text"
                className="h-full px-1 w-full border-gray-500 border outline-none bg-gray-700 rounded-l-md text-white"
              />
              <button className="bg-red-600 h-8 px-1 border-red-600 border rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className=" border-t-2 border-gray-600 mt-4 p-4 flex justify-between">
          &copy; Ec-Shop. all rights reserved.
          <div className="flex gap-5">
            <button className=" hover:text-red-600 duration-300">
              Privacy Policy
            </button>
            <button className=" hover:text-red-600 duration-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };

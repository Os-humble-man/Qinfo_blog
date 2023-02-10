import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  return (
    <header className="md:flex items-center justify-between     py-3 md:py-4 bg-gray-900  relative   text-gray-50 ">
      <div className="flex justify-between min-w-min px-4">
        <div className="flex text-3xl font-normal relative  items-center">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg> */}
          {/* <a href="/">Devloper Blog</a> */}
          <Link to="/">
            <img src={logo} alt="logo" className=" w-16" />
          </Link>
        </div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-toggler"
          className="block cursor-pointer md:hidden self-center h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            strokeWidth="1"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg> */}
        <button
          onClick={() => setNavbar(!Navbar)}
          className="focus:outline-none"
        >
          {Navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <nav className=" md:mt-0 transition delay-300 ease-out md:px-4">
        <ul
          id="menu"
          className={`${
            Navbar
              ? "flex flex-col py-4 z-40 absolute mt-3 pl-4 bg-gray-800 m-0 p-0 w-full"
              : "md:flex md:flex-row md:py-0 md:mt-0  md:items-center  md:relative  md:bg-gray-900 hidden"
          }         text-lg  gap-8`}
        >
          <li>
            <Link to="/blog" className="hover:text-blue-400 ">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 ">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

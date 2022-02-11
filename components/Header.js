import React from "react";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import {FaBars} from "react-icons/fa";

function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header>
      <div className={`appContainer bg-white py-5 px-10  block md:flex justify-between`}>
        <div className={`${styles.logobox} w-full  text-center md:text-left md:w-2/5`}>
          <Image
            src="/hitech-power-logo.png"
            alt="logo"
            width={280}
            height={110}
          />
        </div>
        <div className="hidden md:flex justify-between w-3/5">
          <div className="flex items-center">
            <AiFillPhone size={32} color="red" />
            <div className="ml-3">
              <h3 className="text-pointnine lg:text-xl font-DMSans font-medium">Phone Number</h3>
              <p className="text-pointeight lg:text-lg">+61 1111 98393</p>
            </div>
          </div>
          <div className="flex items-center">
            <AiOutlineMail size={32} color="red" />
            <div className="ml-3">
              <h3 className="text-pointnine lg:text-xl font-DMSans font-medium">Send Your Email</h3>
              <p className="text-pointeight lg:text-lg">info@hitechpowersolutions.com.au</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
      <nav className="appContainer relative flex flex-wrap items-center text-white justify-between mb-3">
        <div className="w-full mx-auto flex flex-row-reverse flex-wrap items-center justify-between">
          <div className="w-full relative flex flex-row-reverse lg:w-auto lg:static lg:flex lg:justify-start py-4">
          <AiFillFacebook
              size={26}
              color="white"
              style={{ marginRight: "10px" }}
            />
            <AiFillInstagram
              size={26}
              color="white"
              style={{ marginRight: "10px" }}
            />
            <AiFillYoutube
              size={26}
              color="white"
              style={{ marginRight: "10px" }}
            />
            <AiFillTwitterCircle
              size={26}
              color="white"
              style={{ marginRight: "10px" }}
            />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none mr-auto"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex grow flex-col lg:flex-row list-none">
              <li className="nav-item">
              <Link href="/">
                <a className="w-full lg:w-auto inline-block py-5 px-5 text-base font-bold uppercase hover:bg-primary font-Hind">
                  Home
                </a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/products">
                <a className="w-full lg:w-auto inline-block py-5 px-5 text-base font-bold uppercase hover:bg-primary font-Hind">
                  Products
                </a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/about">
                <a className="w-full lg:w-auto inline-block py-5 px-5 text-base font-bold uppercase hover:bg-primary font-Hind">
                  About Us
                </a>
              </Link>
              </li>
              <li>
                <Link href="/contact">
                <a className="w-full lg:w-auto inline-block py-5 px-5 text-base font-bold uppercase hover:bg-primary font-Hind">
                  Contact
                </a>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </header>
 );
}

export default Header;

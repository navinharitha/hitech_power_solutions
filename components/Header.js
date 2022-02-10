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

function Header() {
  return (
    <header>
      <div className={`appContainer bg-white py-5 px-10 flex justify-between`}>
        <div className={`${styles.logobox} w-2/5`}>
          <Image
            src="/hitech-power-logo.png"
            alt="logo"
            width={280}
            height={110}
          />
        </div>
        <div className="flex justify-between w-3/5">
          <div className="flex items-center">
            <AiFillPhone size={32} color="red" />
            <div className="ml-3">
              <h3 className="text-xl font-medium">Phone Number</h3>
              <p className="text-lg">+61 1111 98393</p>
            </div>
          </div>
          <div className="flex items-center">
            <AiOutlineMail size={32} color="red" />
            <div className="ml-3">
              <h3 className="text-xl font-medium">Send Your Email</h3>
              <p className="text-lg">info@hitechpowersolutions.coma.au</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <nav
          className={`appContainer mx-auto flex justify-between text-white items-center`}
        >
          <ul>
            <li>
              <Link href="/">
                <a className="inline-block py-5 px-5 text-base font-bold uppercase hover:bg-primary font-Hind">
                  Home
                </a>
              </Link>
              <Link href="/products">
                <a className="inline-block py-5 px-5 text-base font-bold uppercase hover:bg-primary font-Hind">
                  Products
                </a>
              </Link>
              <Link href="/about">
                <a className="inline-block py-5 px-5 text-base font-bold uppercase hover:bg-primary font-Hind">
                  About Us
                </a>
              </Link>
              <Link href="/contact">
                <a className="inline-block py-5 px-5 text-base font-bold uppercase hover:bg-primary font-Hind">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div className="flex justify-between">
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
          </div>
        </nav>
      </div>
    </header>
 );
}

export default Header;

import React from "react";
import PageBanner from "../components/PageBanner";
import AboutSection from "../components/AboutSection";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";
import {
  FaShippingFast,
  FaDollarSign,
  FaRegStar,
  FaCheck,
} from "react-icons/fa";

function About() {
  return (
    <React.Fragment>
      <PageBanner title="About Us" />
      <AboutSection />
      <div className={`py-16 ${styles.backgroundwrapper}`}>
        <div
          className={`mx-auto text-white appContainer ${styles.appContainer}`}
        >
          <div className={`flex flex-wrap items-center overflow-hidden`}>
            <div
              className={`px-3 w-full overflow-hidden  lg:my-1 lg:px-3 md:w-4/12 xl:my-1 xl:px-3 xl:w-4/12 text-center`}
            >
              <div className={styles.centeralign}>
                <FaShippingFast size={50} />
              </div>
              <h3 className={`text-lgheading font-semibold mt-2 mb-2`}>
                Free Shipping
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div
              className={`px-3 w-full overflow-hidden mt-2 mb-2 md:mt-0 md:mb-0 lg:my-1 lg:px-3 md:w-4/12 xl:my-1 xl:px-3 xl:w-4/12 text-center`}
            >
              <div className={styles.centeralign}>
                <FaDollarSign size={50} />
              </div>
              <h3 className={`text-lgheading font-semibold mt-2 mb-2`}>
                Secure Payment System{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              </p>
            </div>

            <div
              className={`px-3 w-full overflow-hidden lg:my-1 lg:px-3 md:w-4/12 xl:my-1 xl:px-3 xl:w-4/12 text-center`}
            >
              <div className={styles.centeralign}>
                <FaRegStar size={50} />
              </div>
              <h3 className={`text-lgheading font-semibold mt-2 mb-2`}>
                Premium Products
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`mx-auto py-16 appContainer ${styles.appContainer}`}>
        <div className={`flex flex-wrap items-center overflow-hidden`}>
          <div
            className={`px-3 w-full overflow-hidden lg:my-1 lg:px-3 lg:w-6/12 xl:my-1 xl:px-3 xl:w-6/12 text-center`}
          >
            <div className={`${styles.WhySection__ImageWrapper}`}>
              <Image
                src="/why_choose.png"
                alt="why_choose_image"
                objectFit="cover"
                layout="fill"
                className={styles.AboutSection__Image}
              />
            </div>
          </div>
          <div
            className={`px-3 w-full overflow-hidden lg:my-1 lg:px-3 lg:w-6/12 xl:my-1 xl:px-3 xl:w-6/12`}
          >
            <h2 className={`text-blackheading font-Hind font-semibold`}>
              Why Choose Us?
            </h2>
            <h3 className={`text-smallheading font-extrabold uppercase`}>
              Hitech power solutions
            </h3>
            <div className="divider mb-7"></div>
            <p className={`text-bodyfont mb-4`}>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida lacus vel facilisis.
            </p>
            <ul>
              <li className={`flex flex-wrap items-center`}>
                <span className={`pr-1 text-primaryred`}>
                  <FaCheck size={14} />
                </span>{" "}
                <span>We Are Highly Experienced</span>
              </li>
              <li className={`flex flex-wrap items-center`}>
                <span className={`pr-1 text-primaryred`}>
                  <FaCheck size={14} />{" "}
                </span>
                <span>Reducing Client Costs</span>
              </li>
              <li className={`flex flex-wrap items-center`}>
                <span className={`pr-1 text-primaryred`}>
                  <FaCheck size={14} />
                </span>
                <span>Providing Technical Expertise</span>
              </li>
              <li className={`flex flex-wrap items-center`}>
                <span className={`pr-1 text-primaryred`}>
                  <FaCheck size={14} />
                </span>
                <span>We Are Always Up To Date</span>{" "}
              </li>
            </ul>
            <Link href="/contact">
              <a
                className={`font-semibold font-DMSans text-sizeone mt-4 ${styles.Whychoose__Button}`}
              >
                Contact Us Today!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;

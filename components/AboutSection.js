import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/AboutSection.module.css";

function AboutSection({ readmorebutton }) {
  return (
    <div className="appContainer py-20 block md:flex justify-between">
      <div className={`${styles.AboutSection__ImageWrapper}`}>
        <Image
          src="/about-high.png"
          alt="about_sec_image"
          objectFit="cover"
          layout="fill"
          className={styles.AboutSection__Image}
        />
      </div>
      <div className={styles.AboutSection__ContentWrapper}>
        <h3 className="text-4xl font-bold mb-1">
          Welcome to Hitech Power Solutions
        </h3>
        <h6 className="text-lg font-bold mb-2">HITECHPOWER SOLUTIONS</h6>
        <div className="divider mb-7"></div>
        <p className="text-lg mb-8 mt-6">
          We are supplying all types of electrical solutions which required to
          caravan industry starting from solar regulator & panels, LED down
          lights, battery chargers, etc. As specialists in RV electrical we will
          be more than happy to assist you with any enquirers that you have
          contact us today to order your items.
        </p>
        {readmorebutton && (
          <Link href="/about">
            <a className={styles.AboutSection__ContentWrapper__Button}>
              Learn More About
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default AboutSection;

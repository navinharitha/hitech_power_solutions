import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
      <footer>
          <div className={`mx-auto text-white text-center py-6 ${styles.footercontact}`}>
          <h3 className={`${styles.font22} ${styles.fontmedium}`}>Need help? Call our award-winning support team 24/7 at (<a href="tel:+61111111111">+61 111 111 111</a>)</h3>
          <span className={styles.trangle}></span>
          </div>
<div className={styles.footerwrapper}>
<div className={`mx-auto text-white  ${styles.container} ${styles.ptop}`}>
<div className={`flex flex-wrap items-center overflow-hidden`}>
            <div className={`px-3 w-full overflow-hidden lg:my-1 lg:px-3 lg:w-4/12 xl:my-1 xl:px-3 xl:w-4/12`}>
            <div className={`mb-5 ${styles.footerlogo__Wrapper}`}>
        <Image
          src="/hitech-power-new-logo-white.png"
          alt="footert_logo"
          objectFit="cover"
          layout="fill"
          className={styles.footerlogo__Image}
        />
      </div>
                <p className={styles.font14}>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className={`px-3 w-full overflow-hidden lg:my-1 lg:px-3 lg:w-8/12 xl:my-1 xl:px-3 xl:w-8/12 mt-2 lg:mt-0`}>
            <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 md:px-3`}>
                <div><h4 className={`mb-4  ${styles.font18}`}>Products</h4>
                    <ul className={styles.font14}>
                        <li>Pricing</li>
                        <li> Teams</li>
                        <li> Education</li>
                        <li>Refer a friend</li>
                        <li>Updates</li>
                    </ul>
                </div>
                <div>
                    <h4 className={`mb-4  ${styles.font18}`}>Features</h4>
                    <ul className={styles.font14}>
                        <li>Overview</li>
                        <li>Design</li>
                        <li>Code</li>
                        <li>Collaborate</li>
                        <li>Sletch Plugin</li>
                    </ul>
                </div>
                <div><h4 className={`mb-4  ${styles.font18}`}>Get Started</h4>
                <ul className={styles.font14}>
                        <li>Tutorials</li>
                        <li>Resources</li>
                        <li>Guides</li>
                        <li>Examples</li>
                        <li>Docs</li>
                    </ul>
                </div>
                <div><h4 className={`mb-4  ${styles.font18}`}>About</h4>
                <ul className={styles.font14}>
                        <li>Stories</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Brand Assets</li>
                    </ul>
                </div>
                </div>
            </div>
        </div> 
    </div>
    <div className={`mx-auto  ${styles.divider}`}>
        </div>
    <div className={`mx-auto text-white pb-5 ${styles.container}`}>
        <div className={`flex flex-wrap items-center overflow-hidden`}>
            <div className={`px-3 w-full overflow-hidden md:my-1 md:px-3 md:w-1/2 lg:my-1 lg:px-3 lg:w-1/2 xl:my-1 xl:px-3 xl:w-1/2 font-Hind text-center md:text-left  ${styles.font14} ${styles.copyrightcolor}`}>Hitechpower Solutions design by PMGS Digital</div>
            <div className={`px-3 w-full overflow-hidden  md:my-1 md:px-3 md:w-1/2  lg:my-1 lg:px-3 lg:w-1/2 xl:my-1 xl:px-3 xl:w-1/2 text-center md:text-right font-Hind   ${styles.font14} ${styles.copyrightcolor}`}>© 2021 All rights reserved</div>
        </div>
    </div>
</div>
</footer>
  );
  
}

export default Footer;

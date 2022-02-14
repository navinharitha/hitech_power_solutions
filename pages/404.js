import React from "react";
import styles from "../styles/NotFound.module.css";

function NotFound() {
  return (
    <div className={`px-3 ${styles.notFound}`}>
      <div className={`flex items-center flex-col justify-center ${styles.notheight}`}>
      <h3 className={styles.notFound_Title}>404 - Not Found</h3>
      <div class="divider mb-7 mr-auto ml-auto"></div>
      <div class="w-full md:w-5/12 mx-auto"><p className="text-bodyfont">The page you are looking for might have been removed had its name changed or is temporaily unavailable</p></div>
      <a className={`font-semibold font-DMSans text-sizeone mt-6 ${styles.notFoundbtn}`} href="/">Go To Home Page</a>
    </div>
    </div>
  );
}

export default NotFound;

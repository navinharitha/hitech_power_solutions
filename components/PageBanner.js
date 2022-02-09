import React from "react";
import styles from "../styles/PageBanner.module.css";

function PageBanner({ title }) {
  return (
    <div className={styles.pageBanner}>
      <h2 className="text-4xl text-white font-bold">{title}</h2>
    </div>
  );
}

export default PageBanner;

import React from "react";
import Link from "next/link";
import styles from "../styles/NotFound.module.css";
import Layout from "../components/Layout";

function NotFound() {
  return (
    <Layout title="Hitech Power Solutions | NotFound">
      <div className={`px-3 ${styles.notFound}`}>
        <div
          className={`flex items-center flex-col justify-center ${styles.notheight}`}
        >
          <h3 className={styles.notFound_Title}>404 - Not Found</h3>
          <div className="divider mb-7 mr-auto ml-auto"></div>
          <div className="w-full md:w-5/12 mx-auto">
            <p className="text-bodyfont">
              The page you are looking for might have been removed had its name
              changed or is temporaily unavailable
            </p>
          </div>
          <Link href="/">
            <a
              className={`font-semibold font-DMSans text-sizeone mt-6 ${styles.notFoundbtn}`}
            >
              Go To Home Page
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;

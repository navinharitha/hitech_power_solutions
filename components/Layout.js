import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import CartItem from "./CartItem";
import MiniCart from "./MiniCart";

function Layout({ children, title, description }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="icon" href="/share.jpg" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        ></meta>
        <meta name="robots" content="index, nofollow" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hitechpowersolutions.com.au" />
        <meta
          property="og:image"
          content="https://hitechpowersolutions.com.au/share.jpg"
        />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="Hitech Power Solutions" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Hind:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <CartItem />
      <MiniCart />
      <Footer />
    </React.Fragment>
  );
}

Layout.defaultProps = {
  title: "Hitech Power Solutions",
  description: "Hitech Ecommerce",
};

export default Layout;

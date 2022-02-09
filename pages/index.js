import React from "react";
import Layout from "../components/Layout";
import Sliders from "../components/Sliders";
import AboutSection from "../components/AboutSection";
import ProductList from "../components/ProductList";
import { getFeaturedProducts } from "../lib/shopify";
import styles from "../styles/Home.module.css";

export default function Home({ featuredProducts }) {
  return (
    <Layout>
      <Sliders />
      <AboutSection />
      <div className="productContainer">
        <h3 className="text-4xl font-bold">Our Latest Products</h3>
        <h6 className="text-lg mt-1 mb-2 font-semibold">
          HITECHPOWER SOLUTIONS
        </h6>
        <div className="divider mb-10"></div>
      </div>
      <div className="mb-60">
        <ProductList products={featuredProducts} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts();
  return {
    props: {
      featuredProducts,
    },
  };
}

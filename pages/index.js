import React from "react";
import Image from "next/image";
import Sliders from "../components/Sliders";
import PaginatedItems from "../components/PaginatedItems";
import CollectionList from "../components/CollectionList";
import Layout from "../components/Layout";
import { getFeaturedProducts, getCollections } from "../lib/shopify";
import styles from "../styles/Home.module.css";

export default function Home({ featuredProducts, collections }) {
  return (
    <Layout title="Hitech Power Solutions | Home">
      <Sliders />
      <div className="productContainer pt-20 pb-4">
        <h3 className="text-2xl font-bold text-primary">Featured Products</h3>
      </div>
      <div className="mb-20">
        <PaginatedItems products={featuredProducts} itemsPerPage={4} />
      </div>
      <div className="productContainer pb-4">
        <h3 className="text-2xl font-bold text-primary">Shop by Collection</h3>
      </div>
      <div className="mb-20">
        <CollectionList collections={collections} />
      </div>
      <div
        className={`appContainer mt-20 mb-20 relative ${styles.bannerImageWrapper}`}
      >
        <Image
          src="/banner-1.jpg"
          alt="banner-01"
          layout="fill"
          objectFit="cover"
          className={styles.bannerImage}
        />
      </div>
      <div className="productContainer pb-4">
        <h3 className="text-2xl font-bold text-primary">Our Latest Products</h3>
      </div>
      <div className="mb-20">
        <PaginatedItems products={featuredProducts} itemsPerPage={4} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts();
  const collections = await getCollections();
  return {
    props: {
      featuredProducts,
      collections,
    },
  };
}

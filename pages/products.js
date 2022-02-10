import React from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { getAllProducts } from "../lib/shopify";
import PaginatedItems from "../components/PaginatedItems";

function Products({ products }) {
  return (
    <Layout>
      <PageBanner title="Shop" />
      <div className="py-20">
        <PaginatedItems products={products} itemsPerPage={4} />
      </div>
    </Layout>
  );
}

export default Products;

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
}

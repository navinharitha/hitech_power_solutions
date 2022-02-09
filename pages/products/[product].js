import React from "react";
import { getAllProducts, getProduct } from "../../lib/shopify";
import ProductDetail from "../../components/ProductDetail";

export default function Product({ product }) {
  return <ProductDetail product={product} />;
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);
    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: { product },
  };
}

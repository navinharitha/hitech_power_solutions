import React from "react";
import Layout from "../../components/Layout";
import {
  getAllProducts,
  getProduct,
  getRecommendateProducts,
} from "../../lib/shopify";
import ProductDetail from "../../components/ProductDetail";

export default function Product({ product, recomendedProducts }) {
  return (
    <Layout title={`Hitech Power Solutions | ${product.title}`}>
      <ProductDetail
        product={product}
        recomendedProducts={recomendedProducts}
      />
    </Layout>
  );
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
  const recomendedProducts = await getRecommendateProducts(product.id);
  return {
    props: { product, recomendedProducts },
  };
}

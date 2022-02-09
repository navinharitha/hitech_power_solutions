import React from "react";
import ProductItem from "./ProductItem";
import styles from "../styles/ProductList.module.css";

function ProductList({ products }) {
  return (
    <div className={`productContainer ${styles.productList}`}>
      {products.map((product) => (
        <ProductItem product={product} key={product.node.id} />
      ))}
    </div>
  );
}

export default ProductList;

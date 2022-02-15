import React from "react";
import ProductItem from "./ProductItem";
import styles from "../styles/ProductList.module.css";

function ProductList({ products }) {
  return (
    <div className={`productContainer ${styles.productList}`}>
      {products.length === 0 ? (
        <div className="text-2xl font-700">No Products Found...</div>
      ) : (
        products.map((product) => (
          <ProductItem product={product} key={product.node.id} />
        ))
      )}
    </div>
  );
}

export default ProductList;

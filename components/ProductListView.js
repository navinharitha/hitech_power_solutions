import React from "react";
import ProductItemView from "./ProductItemView";
import styles from "../styles/ProductListView.module.css";

function ProductList({ products }) {
  return (
    <div className={`productContainer ${styles.productList}`}>
      {products.length === 0 ? (
        <div className="text-2xl font-700">No Products Found...</div>
      ) : (
        products.map((product) => (
          <ProductItemView product={product} key={product.node.id} />
        ))
      )}
    </div>
  );
}

export default ProductList;

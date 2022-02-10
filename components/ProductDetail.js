import React from "react";
import styles from "../styles/ProductDetail.module.css";
import Link from "next/link";
import { formatter } from "../utils/helpers";
import Layout from "../components/Layout";
import ImageGallery from "react-image-gallery";
import ProductVariant from "./ProductVariant";

export default function ProductDetail({ product }) {
  const images = [];
  product.images.edges.forEach((image) => {
    images.push({
      original: image.node.originalSrc,
      thumbnail: image.node.originalSrc,
    });
  });
  return (
    <Layout>
      <div className="appContainer flex flex-col">
        <div className={styles.productDetail_Wrapper}>
          <div className={styles.wrapper}>
            <div className={styles.productImage_Wrapper}>
              <div className={styles.productImage}>
                <div className={styles.breadcrumb}>
                  <Link href="/products">
                    <a className={styles.breadcrumb_Text}>Products</a>
                  </Link>{" "}
                  <span> {" > "} </span>
                  <span>{product.title}</span>
                </div>
                <ImageGallery
                  items={images}
                  autoPlay
                  lazyLoad
                  showFullscreenButton={false}
                  showPlayButton={false}
                />
              </div>
            </div>
            <div className={styles.content_Wrapper}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.productDescription}>{product.description}</p>
              <h3 className={styles.productPrice}>
                {formatter.format(product.priceRange.minVariantPrice.amount)}
              </h3>
              <label className={styles.productQuantityLabel}>
                Quantity
                <input
                  type="number"
                  // value={1}
                  // onChange={handleQuantityChange}
                  className={styles.productQuantity}
                  min={1}
                />
              </label>
              <button
                className={styles.addToCart}
                // onClick={() => addToCart(selectedVariant)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-40 mb-40">
          <p className={styles.productLongDescription}>{product.description}</p>
        </div>
      </div>
    </Layout>
  );
}

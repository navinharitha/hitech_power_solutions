import React from "react";
import styles from "../styles/ProductDetail.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import ImageGallery from "react-image-gallery";
// import ProductVariant from "./ProductVariant";

export default function ProductDetail({ product }) {
  const images = [];
  product.images.edges.forEach((image) => {
    images.push({
      original: image.node.originalSrc,
      thumbnail: image.node.originalSrc,
      originalHeight: "400px",
      thumbnailHeight: "80px",
    });
  });
  return (
    <Layout>
      <div className="appContainer">
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
            {/* <div className={styles.content_Wrapper}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <ProductVariant product={product} />
          </div> */}
          </div>
          <div className={styles.productDescription_Wrapper}>
            <p className={styles.productDescription}>{product.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

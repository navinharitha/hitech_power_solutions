import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductItem.module.css";
import { formatter } from "../utils/helpers";

function ProductItem({ product }) {
  return (
    <div className={styles.productItem_Wrapper}>
      <Link href={`/products/${product.node.title}`}>
        <a>
          <div className={styles.productItem_Image_Wrapper}>
            <div className={styles.productItem_Image}>
              <Image
                src={product.node.images.edges[0].node.originalSrc}
                alt={product.node.images.edges[0].node.altText}
                objectFit="cover"
                layout="fill"
              />{" "}
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.productItem_Content}>
        <h3 className={styles.productItem_Title}>{product.node.title}</h3>
        <h2 className={styles.productItem_Price}>
          {formatter.format(product.node.priceRange.minVariantPrice.amount)}
        </h2>
        <Link href={`/products/${product.node.handle}`}>
          <a className={styles.productItem_Button}>View Product</a>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/RecomendedProducts.module.css";
import { formatter } from "../utils/helpers";

function RecomendedProducts({ products }) {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold">Related Products</h3>
      <div className={`grid grid-cols-4 gap-6  ${styles.relatedproductwrap}`}>
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className={styles.product_Wrapper}>
              <div className={` ${styles.productItem_Wrapper}`}>
                <Link href={`/products/${product.handle}`}>
                  <a>
                    <div className={styles.productItem_Image_Wrapper}>
                      <div className={styles.productItem_Image}>
                        <Image
                          src={product.images.edges[0].node.url}
                          alt={product.images.edges[0].node.altText}
                          objectFit="cover"
                          layout="fill"
                        />{" "}
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className={styles.productItem_Content}>
                <h3 className={`font-DMSans ${styles.productItem_Title}`}>
                  {product.title}
                </h3>
                <h2 className={styles.productItem_Price}>
                  {formatter.format(product.priceRange.minVariantPrice.amount)}
                </h2>
                <Link href={`/products/${product.handle}`}>
                  <a
                    className={`font-Hind font-bold ${styles.productItem_Button}`}
                  >
                    View Product
                  </a>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecomendedProducts;

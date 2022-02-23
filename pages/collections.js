import React from "react";
import Link from "next/link";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { FaList } from "react-icons/fa";
import Layout from "../components/Layout";
import PaginatedListItems from "../components/PaginatedListItems";
import PaginatedItems from "../components/PaginatedItems";
import {
  getAllProducts,
  getCollections,
  getProductsByCollection,
} from "../lib/shopify";
import styles from "../styles/Collections.module.css";

function Collections({ collections, products }) {
  const [gridView, setGridView] = React.useState(true);
  const [productData, setProductData] = React.useState(products || []);
  const router = useRouter();
  React.useEffect(() => {
    async function getProductsFromCollection() {
      if (router.query.collection) {
        const products = await getProductsByCollection(router.query.collection);
      }
    }
    getProductsFromCollection();
  }, []);
  return (
    <Layout title="Hitech Power Solutions | Collections">
      <div className="appContainer py-20 flex justify-between items-start">
        <div className={styles.collectionFilterWrapper}>
          <h3 className="mb-6 text-xl font-500">Collection Filters</h3>
          <div className="flex justify-start">
            <div>
              {collections.map((collection) => (
                <div className="form-check mb-2">
                  <Link
                    href={`/collections?collection=${collection.node.handle}`}
                  >
                    <a
                      className={`${
                        router.query.collection === collection.node.handle &&
                        styles.collectionFilterActive
                      }`}
                    >
                      {collection.node.title}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.collectionProductList}>
          <div className={styles.collectionFilterControls}>
            <h5>Showing 48 of 48 products</h5>
            <div className={styles.collectionFilterSortBy}>
              <label>Sort by:</label>
              <select>
                <option>Alphabetically, A-Z</option>
                <option>Alphabetically, Z-A </option>
                <option>Price, low to high </option>
                <option>Price, high to low </option>
                <option>Date, old to new </option>
                <option>Date, new to old </option>
                <option>Best Selling</option>
              </select>
            </div>
            <div className="flex justify-between w-28">
              <span>View</span>
              <BsFillGrid3X3GapFill
                size={26}
                onClick={() => setGridView(true)}
                style={{ cursor: "pointer" }}
              />
              <FaList
                size={26}
                onClick={() => setGridView(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="mt-10">
            <div className="mb-10">
              {gridView ? (
                <PaginatedItems products={productData} itemsPerPage={16} />
              ) : (
                <PaginatedListItems products={productData} itemsPerPage={16} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Collections;

export async function getStaticProps() {
  const products = await getAllProducts();
  const collections = await getCollections();
  return {
    props: {
      products,
      collections,
    },
  };
}

import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import Layout from "../components/Layout";
import PaginatedListItems from "../components/PaginatedListItems";
import PaginatedItems from "../components/PaginatedItems";
import { getFeaturedProducts, getCollections } from "../lib/shopify";
import styles from "../styles/Collections.module.css";

function Collections({ collections, products }) {
  const [gridView, setGridView] = React.useState(true);
  return (
    <Layout title="Hitech Power Solutions | Collections">
      <div className="appContainer py-20 flex justify-between items-start">
        <div className={styles.collectionFilterWrapper}>
          <h3 className="mb-6 text-xl font-500">Collection Filters</h3>
          <div className="flex justify-start">
            <div>
              {collections.map((collection) => (
                <div className="form-check mb-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="flexCheckDefault"
                  >
                    {collection.node.title}
                  </label>
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
                <PaginatedItems products={products} itemsPerPage={16} />
              ) : (
                <PaginatedListItems products={products} itemsPerPage={16} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const products = await getFeaturedProducts();
  const collections = await getCollections();
  return {
    props: {
      products,
      collections,
    },
  };
}

export default Collections;

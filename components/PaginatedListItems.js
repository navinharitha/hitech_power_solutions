import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductListView from "./ProductListView";
import styles from "../styles/PaginatedItems.module.css";

function PaginatedListItems({ itemsPerPage, products }) {
  const [currentItems, setCurrentItems] = useState(products);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  return (
    <React.Fragment>
      <ProductListView products={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="&rarr;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="&larr;"
        renderOnZeroPageCount={null}
        containerClassName={styles.paginationContainer}
        pageLinkClassName={styles.paginationLinkItem}
        activeLinkClassName={styles.paginationActiveLinkItem}
      />
    </React.Fragment>
  );
}

export default PaginatedListItems;

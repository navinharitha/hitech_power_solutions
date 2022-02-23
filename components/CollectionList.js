import React from "react";
import Link from "next/link";
import styles from "../styles/CollectionList.module.css";

function CollectionList({ collections }) {
  return (
    <div className={`${styles.content} appContainer`}>
      {collections?.map((collection) => (
        <Link href={`/collections?collection=${collection.node.handle}`}>
          <div className={styles.collections_Item} key={collection.node.handle}>
            <h3 className={styles.collections_Item_Title}>
              {collection.node.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CollectionList;

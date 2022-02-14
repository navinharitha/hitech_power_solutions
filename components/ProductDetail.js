import React, { useContext, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Tab } from "@headlessui/react";
import styles from "../styles/ProductDetail.module.css";
import Link from "next/link";
import { formatter } from "../utils/helpers";
import ImageGallery from "react-image-gallery";
import { CartContext } from "../context/shopContext";

export default function ProductDetail({ product }) {
  const { addToCart } = useContext(CartContext);
  const images = [];
  product.images.edges.forEach((image) => {
    images.push({
      original: image.node.originalSrc,
      thumbnail: image.node.originalSrc,
    });
  });
  const [defaultProductCount, setDefaultProductCount] = useState(0);
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};
    variant.node.selectedOptions.map((item) => {
      allOptions["type"] = item.value;
    });
    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });
  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = React.useState(
    allVariantOptions[0]
  );
  const [selectedOptions, setSelectedOptions] = React.useState(defaultValues);
  function handleSelect(event) {
    setSelectedVariant(
      allVariantOptions.find((variant) => variant.id === event.target.value)
    );
  }
  function handleQuantityChange(event) {
    if (event.target.value === 0) {
      setSelectedVariant((prevState) => ({
        ...prevState,
        variantQuantity: 0,
      }));
    }
    setSelectedVariant((prevState) => ({
      ...prevState,
      variantQuantity:
        prevState.variantQuantity < event.target.value
          ? prevState.variantQuantity + 1
          : prevState.variantQuantity - 1,
    }));
  }
  return (
    <React.Fragment>
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
              <p className={styles.productshortDescription}>
                {product.metafield.value}
              </p>
              <h3 className={styles.productPrice}>
                {formatter.format(product.priceRange.minVariantPrice.amount)}
              </h3>
              {!product.availableForSale && (
                <p className="inline-block bg-primary text-white mb-3 text-sm py-1 px-2">
                  Out of Stock
                </p>
              )}
              <label className={styles.productQuantityLabel}>
                Quantity
                <input
                  type="number"
                  value={selectedVariant.variantQuantity}
                  onChange={handleQuantityChange}
                  className={styles.productQuantity}
                  min={1}
                />
              </label>
              <button
                className={styles.addToCart}
                onClick={() => addToCart(selectedVariant)}
                disabled={!product.availableForSale}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-40 mb-40">
          <Tab.Group>
            <Tab.List className="mb-8">
              <Tab as={React.Fragment}>
                {({ selected }) => (
                  <button
                    className={`
                  ${
                    selected
                      ? "bg-white text-black border-b-4 border-solid border-primary"
                      : "bg-white text-black"
                  }
                  py-4 px-4
                `}
                  >
                    Description
                  </button>
                )}
              </Tab>
              <Tab as={React.Fragment}>
                {({ selected }) => (
                  <button
                    className={`
                  ${
                    selected
                      ? "bg-white text-black border-b-4 border-solid border-primary"
                      : "bg-white text-black"
                  }
                  py-4 px-4
                `}
                  >
                    Reviews
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <p className={styles.productLongDescription}>
                  {product.description}
                </p>
              </Tab.Panel>
              <Tab.Panel>
                <h3 className="text-xl mb-3">Leave a Reviews</h3>
                <div className="flex justify-start">
                  <AiOutlineStar size={28} />
                  <AiOutlineStar size={28} />
                  <AiOutlineStar size={28} />
                  <AiOutlineStar size={28} />
                  <AiOutlineStar size={28} />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </React.Fragment>
  );
}

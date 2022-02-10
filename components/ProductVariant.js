import React, { useContext, useState } from "react";
import { formatter } from "../utils/helpers";
import styles from "../styles/ProductVariant.module.css";
import { createCheckout } from "../lib/shopify";
// import { CartContext } from "../context/shopContext";

function ProductVariant({ product }) {
  //   const { addToCart } = useContext(CartContext);
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
    <div>
      <h3 className={styles.productPrice}>
        {formatter.format(selectedVariant.variantPrice)}
      </h3>
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
      <div>
        <p className={styles.typeName}>{product.options[0].name}</p>
        <select
          onChange={handleSelect}
          value={selectedVariant.id}
          className={styles.variantType}
        >
          {allVariantOptions.map((variantOption) => (
            <option
              key={variantOption.id}
              value={variantOption.id}
              className={styles.variantOption}
            >
              {variantOption.options.type}
            </option>
          ))}
        </select>
      </div>
      <button
        className={styles.addToCart}
        // onClick={() => addToCart(selectedVariant)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductVariant;

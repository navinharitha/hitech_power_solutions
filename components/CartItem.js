import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/CartItem.module.css";
import { CartContext } from "../context/shopContext";

function CartItem() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <div className={styles.cartItem} onClick={() => setCartOpen(!cartOpen)}>
      <p className={styles.cartQuantity}>{cartQuantity}</p>
      <Image src="/shopping-cart.svg" alt="cart-icon" width={32} height={32} />
    </div>
  );
}

export default CartItem;

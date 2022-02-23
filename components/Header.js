import React, { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillPhone,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { getAllProducts } from "../lib/shopify";
import { CartContext } from "../context/shopContext";
import { FaBars } from "react-icons/fa";

function Header() {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [productData, setProductData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState(productData);
  const searchTermInput = useRef();
  const [showSearchInputDropdown, setShowSearchInputDropdown] =
    React.useState(false);
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  function handleSearchInputChange(event) {
    if (event.target.value === "") {
      setShowSearchInputDropdown(false);
    } else {
      setShowSearchInputDropdown(true);
      const keyword = searchTermInput.current.value.toLowerCase();
      const filtered = productData.filter((data) =>
        data.node.title.toLowerCase().match(new RegExp(keyword, "g"))
      );
      setFilteredData(filtered);
    }
  }
  useEffect(() => {
    async function getProductsData() {
      const products = await getAllProducts();
      setProductData(products);
    }
    getProductsData();
  }, []);
  return (
    <header className="bg-secondary text-white">
      <div className={`appContainer py-3 px-10  block md:flex justify-between`}>
        <div
          className={`${styles.logobox} w-full  text-center md:text-left md:w-1/5`}
        >
          <Link href="/">
            <a>
              <Image src="/logo.png" alt="logo" width={160} height={60} />
            </a>
          </Link>
        </div>
        <div className="hidden md:flex justify-between w-3/5 items-center">
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearchInputChange}
              ref={searchTermInput}
              className={styles.searchInput}
            />
            <button
              className={styles.searchInputButton}
              onClick={handleSearchInputChange}
            >
              <BiSearch size={32} />
            </button>
            {showSearchInputDropdown && (
              <div className={styles.searchInputDropdown}>
                {filteredData.length === 0 ? (
                  <h3 className={styles.emptyProductMessage}>
                    No Products Matched...
                  </h3>
                ) : (
                  <React.Fragment>
                    <h3 className={styles.searchInputDropdownTitle}>
                      Products
                    </h3>
                    {filteredData.map((product) => (
                      <Link href={`/products/${product.node.handle}`}>
                        <div
                          key={product.node.id}
                          className={styles.searchInputDropdownProductList}
                        >
                          <Image
                            src={product.node.images.edges[0].node.originalSrc}
                            alt={product.node.images.edges[0].node.altText}
                            width={80}
                            height={70}
                          />
                          <div
                            className={
                              styles.searchInputDropdownProductListDetail
                            }
                          >
                            <h3
                              className={
                                styles.searchInputDropdownProductListDetailTitle
                              }
                            >
                              {product.node.title}
                            </h3>
                            <p
                              className={
                                styles.searchInputDropdownProductListDetailPrice
                              }
                            >
                              ${product.node.priceRange.minVariantPrice.amount}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </React.Fragment>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex w-1/5 justify-between items-center px-2">
          <div className={styles.loginWrapper}>
            <h5>Login / Signup</h5>
            <div className="flex justify-start items-center">
              <h6 className="font-bold">My account</h6>
              <IoIosArrowDown />
            </div>
          </div>
          <div
            className="cartWrapper relative cursor-pointer"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <AiOutlineShoppingCart size={38} />
            <span className={styles.cartItemQuantity}>{cartQuantity}</span>
          </div>
        </div>
        {/* <div className="hidden md:flex justify-between w-3/5">
          <a className="flex items-center" href="tel: +61 1111 98393">
            <AiFillPhone size={32} color="red" />
            <div className="ml-3">
              <h3 className="text-pointnine lg:text-xl font-DMSans font-medium">
                Phone Number
              </h3>
              <p className="text-pointeight lg:text-lg">+61 1111 98393</p>
            </div>
          </a>
          <a
            className="flex items-center"
            href="mailto:info@hitechpowersolutions.com.au"
          >
            <AiOutlineMail size={32} color="red" />
            <div className="ml-3">
              <h3 className="text-pointnine lg:text-xl font-DMSans font-medium">
                Send Your Email
              </h3>
              <p className="text-pointeight lg:text-lg">
                info@hitechpowersolutions.com.au
              </p>
            </div>
          </a>
        </div> */}
      </div>
    </header>
  );
}

export default Header;

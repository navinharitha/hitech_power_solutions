import "../styles/globals.css";
import "swiper/scss";
import "react-image-gallery/styles/css/image-gallery.css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ShopProvider>
      <Component {...pageProps} key={router.asPath} />
    </ShopProvider>
  );
}

export default MyApp;

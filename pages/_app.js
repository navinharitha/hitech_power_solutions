import "../styles/globals.css";
import "swiper/scss";
import "react-image-gallery/styles/css/image-gallery.css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

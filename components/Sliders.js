import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import styles from "../styles/Sliders.module.css";

function Sliders() {
  SwiperCore.use(Navigation, Pagination);
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-pagination-color": "#000",
      }}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide>
        <div className={styles.sliderImageWrapper}>
          <div className={styles.sliderImage}>
            <Image
              src="/hero-slider1.jpg"
              alt="slider-01"
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.sliderContentBox}>
              <h3 className={styles.sliderContentBox_Title}>
                30A Solar Regulator
              </h3>
              <p className={styles.sliderContentBox_Description}>
                HiTech 30A solar regulators base on in series PWM mode, with
                full digital technology and LED display, auto run mode with
                large application range, such as off-grid solar home system,
                traffic indicator, solar street lights, solar garden lights and
                so on.
              </p>
              <Link href="/">
                <a className={styles.sliderContentBox_Button}>Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.sliderImageWrapper}>
          <div className={styles.sliderImage}>
            <Image
              src="/hero-slider2.jpg"
              alt="slider-02"
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.sliderContentBox}>
              <h3 className={styles.sliderContentBox_Title}>
                Desk Wireless Charger
              </h3>
              <p className={styles.sliderContentBox_Description}>
                HiTech wireless charger is technologically advanced and
                specially designed for Caravans and Motor Homes. It is easy to
                use and install. This charger can be used as a wireless or wired
                charger.
              </p>
              <Link href="/">
                <a className={styles.sliderContentBox_Button}>Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Sliders;

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import imageDogsApp from "../../assets/dogsApp.png";
import imageRickAndMorty from "../../assets/rickAndMorty.png";
import imagePF from "../../assets/pf.PNG";
import imageEloleros from "../../assets/dogsApp.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import styles from "./SlideFavorites.module.css";
import { Container } from "@mui/material";

function SlideFavorites() {
  return (
    <Container className={styles.container}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Flower Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper_pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper_button_next",
            prevEl: ".swiper_button_prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.swiper_container}
        >
          <SwiperSlide>
            <img src={imageDogsApp} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageEloleros} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageRickAndMorty} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageRickAndMorty} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageRickAndMorty} alt="slide_image" />
          </SwiperSlide>

          <div className={styles.slider_controler}>
            <div
              className={`${styles.swiper_button_prev} ${styles.slider_arrow}`}
            >
              <ion-icon name={styles.arrow_back_outline}></ion-icon>
            </div>
            <div
              className={`${styles.swiper_button_next} ${styles.slider_arrow}`}
            >
              <ion-icon name={styles.arrow_forward_outline}></ion-icon>
            </div>
            <div className={styles.swiper_pagination}></div>
          </div>
        </Swiper>
      </div>
    </Container>
  );
}

export default SlideFavorites;

import React from "react";
import styles from "./MainPageCarusel.module.css";
import Carusel from "./Carusel";
import Image from "next/image";

const MainPageCarusel = ({ caruselImages }) => {
 
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.carouselContainer}`}>
        <Carusel cardsCount={3} data={caruselImages} />
      </div>
      <div className={`${styles.imagesContainer}`}>
      <h6 className={`${styles.menuLink}`} color="#E45826"> </h6>
        {/* <Image src="/images/amazingTypo.png" width={80} height={80} />
        <Image src="/images/box.png" width={80} height={80} /> */}
      </div>
    </div>
  );
};

export default MainPageCarusel;

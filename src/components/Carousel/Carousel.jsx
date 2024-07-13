import React, { useState, useRef } from "react";
import styles from "./carousel.module.scss";
import turnSvg from "../../assets/turn.svg";

const Carousel = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 472;

  const items = [
    {
      image: "https://i.ibb.co/YTHNr3C/Image.png",
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson",
      id: 1,
    },
    {
      image: "https://i.ibb.co/YTHNr3C/Image.png",
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson",
      id: 2,
    },
    {
      image: "https://i.ibb.co/YTHNr3C/Image.png",
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson",
      id: 3,
    },
    {
      image: "https://i.ibb.co/YTHNr3C/Image.png",
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson",
      id: 4,
    },
  ];

  return (
    <div className={styles.carousel}>
      <button
        className={styles.navBtn}
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
        <img src={turnSvg} alt="turn-back-image" />
      </button>
      <div className={styles.container} ref={sliderRef}>
        {items.map((item, index) => {
          return (
            <div key={item.id}>
              <img
                className={styles.image}
                alt="sliderImage"
                key={index}
                src={item.image}
              />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
      <button
        className={`${styles.navBtn} ${styles.rotateBtn}`}
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}
      >
        <img src={turnSvg} alt="turn-back-image" />
      </button>
    </div>
  );
};

export default Carousel;

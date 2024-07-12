import React,{useState,useRef} from 'react'
import styles from './carousel.module.scss'

const Carousel = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 472;

  const items = [
    {
      image: "https://i.ibb.co/YTHNr3C/Image.png",
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson"
    },
    {
      image: "https://i.ibb.co/YTHNr3C/Image.png",
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson"
    },
    {
      image: "https://i.ibb.co/YTHNr3C/Image.png",
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson"
    },
    {
      image: "https://i.ibb.co/YTHNr3C/Image.png",
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      desc: "1h ago · by Troy Corlson"
    },
  ]
  
  return (
    <div className={styles.carousel}>
      <button
        className={styles.navBtn}
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
        Prev
      </button>
      <div className={styles.container} ref={sliderRef}>
      
        {items.map((item,index) => {
          return (
            <div>
            
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
        className={styles.navBtn}
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; 
        }}
      >
        Next
      </button>


   </div>
  )
}

export default Carousel

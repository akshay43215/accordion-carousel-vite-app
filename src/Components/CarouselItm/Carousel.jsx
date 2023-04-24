import React, { useEffect, useState } from "react";
import "./CarouselItm.css";


export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};


const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);


    const nextOne =()=> {
      setActiveIndex( activeIndex === React.Children.count(children)-1 ? 0 :activeIndex+1 )
    }
    const prevOne =()=> {
      setActiveIndex( activeIndex === 0 ? React.Children.count(children)-1 :activeIndex-1 )
    }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        nextOne(activeIndex + 1);
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={
            prevOne
          }
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : "non-active"}`}
            >
              
            </button>
          );
        })}
        
        <button
          onClick={
            nextOne
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;

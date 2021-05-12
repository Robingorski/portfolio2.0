import React, { useState, useEffect, useRef } from "react";

const items = [0, 1, 2, 3, 4, 5];

const Pageindicator = () => {
    const [index, setIndex] = useState(0);
    const increment = useRef(1);
    useEffect(() => {
      let interval = setInterval(() => {
        if (index >= items.length - 1) {
          increment.current = -1;
        } else if (index <= 0) {
          increment.current = 1;
        }
        setIndex(index + increment.current);
      }, 500);
      return () => clearInterval(interval);
    }, []);
    

  return (
    <div>
      <div>
        {items.map((i) => {
          return (
              <div className="page_indicator_container">
              <div className="page_indicator-qs"></div>
{/*               <div className="page_indicator-quire"></div>
              <div className="page_indicator-sss"></div>
              <div className="page_indicator-kyh"></div>
              <div className="page_indicator-about_me"></div> */}
              <div className="mover"style={{transform: `translateX(${(index - i) * 40}px)`,}}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};


  export default Pageindicator;
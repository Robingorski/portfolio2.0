import arrow from '../assets/arrow-down.svg';
import { useRef, useEffect } from "react";
import gsap from "gsap";

function Arrow() {

const arrow_bounce = useRef(null);
  useEffect(() => {
    gsap.fromTo(".arrow-img", {y:-30}, {duration: 0.7, delay: 2, y:0, ease:"circ.in", repeat:-1, yoyo:true});
  }, []);


return (
<div className="arrow-div">
<img ref={arrow_bounce} id="arrow-icon" className="arrow-img" src={arrow} alt="arrow-down" />
</div>   
);
}

export default Arrow;
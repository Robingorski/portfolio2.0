import mouse from '../assets/mouse-scroll.svg';
import { useRef, useEffect } from "react";
import gsap from "gsap";

function Mouse() {

const mouse_bounce = useRef(null);
  useEffect(() => {
    gsap.fromTo(".mouse-img", {y:-30}, {duration: 0.7, delay: 2, y:0, ease:"circ.in", repeat:-1, yoyo:true});
  }, []);


return (
<div className="mouse-div">
<img ref={mouse_bounce} id="mouse-icon" className="mouse-img" src={mouse} alt="mouse-scroll" />
</div>   
);
}

export default Mouse;
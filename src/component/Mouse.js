import mouse from '../assets/mouse-scroll.svg';
import gsap from "gsap";


gsap.fromTo(".mouse-img", {y:-30}, {duration: 0.7, y:0, ease:"circ.in", repeat:-1, yoyo:true})

function Mouse() {
return (
    <div className="mouse-div">
    <img className="mouse-img" src={mouse} alt="mouse-scroll" />
    </div>
);
}

export default Mouse;
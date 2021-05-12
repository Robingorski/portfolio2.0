import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Scrollindicator() {
/*     const scroll_indicator_qs = useRef(null);
    const scroll_indicator_gp = useRef(null);
    const scroll_indicator_sss = useRef(null);
    const scroll_indicator_kyh = useRef(null);
    const scroll_indicator_about_me = useRef(null); */
    const scroll_indicator_mover = useRef(null);
    
    
/*     useEffect(() => {
        gsap.fromTo(".mover", {y:-30, opacity:0}, {opacity:1 ,duration: 0.4, y:0,});
      }, []); */


    useEffect(() => {
        gsap.to(".mover", {
            scrollTrigger:{
                trigger: ".mover",
                markers:"true",
                start:"top bottom",
                end:"bottom top",
                /* toggleActions:"restart pause reverse pause" */
            },
            x: -175,
            duration: 2
        })
    }, []);
 

return (
/*     <div className="page_indicator_container">
    <div ref={scroll_indicator_qs} className="page_indicator-qs"></div>
    <div ref={scroll_indicator_gp} className="page_indicator-gp"></div>
    <div ref={scroll_indicator_sss} className="page_indicator-sss"></div>
    <div ref={scroll_indicator_kyh} className="page_indicator-kyh"></div>
    <div ref={scroll_indicator_about_me} className="page_indicator-about_me"></div>
    <div ref={scroll_indicator_mover} className="mover"></div>
    </div> */
    <div ref={scroll_indicator_mover} className="mover"></div>
);
}

export default Scrollindicator;
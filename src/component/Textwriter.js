import gsap from "gsap";
import { useRef, useEffect } from "react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


function Textwriter() {
    const text_hw = useRef(null);
    const text_robin = useRef(null);
  useEffect(() => {
    gsap.to(".HW_context", {duration: 2, text: "Hello World!", ease: "none"});
  }, []);
  
  useEffect(() => {
    gsap.to(".HW_container_context", {duration: 8, delay: 2, text: "Im a Front-end developer, with passion for design and animations.", ease: "none"});
  }, []);


return (
    <div className="HW_container">
<div ref={text_hw} className="HW_context"></div>
<div ref={text_robin} className="HW_container_context"></div>
    </div>
);
}

export default Textwriter;
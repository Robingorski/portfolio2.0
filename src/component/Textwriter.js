import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

/* 
gsap.to("h1", {duration: 3, text: "Hello World!"}) */

/* gsap.defaults({ease: "none"}); */

/* const tx = gsap.timeline({repeat:3, repeatDelay:1, yoyo:true});
tx.to("HW_container_context", {duration: 4, text:" is so much fun you should try it some time!"}) */

/* gsap.to(".HW_container_context", {duration: 4, delay: 1, text: "Hello World!"}) */
gsap.to(".HW_context", {duration: 2, text: "Hello World!", ease: "none"});



function Textwriter() {
return (
<div className=".HW_context" id="typewriter"></div>
);
}

export default Textwriter;
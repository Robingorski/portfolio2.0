import React from 'react';
import './App.scss';
import logo from '../src/assets/pineapple.svg'
import QS from '../src/assets/qs-screen.png';
import mouse from '../src/assets/mouse-scroll.svg';


function App() {
    return (
        <div className="horizontal-page">
        
        <div className="HW_landingpage">
            <div className="pineapple-div">
                <img className="pineapple" src={logo} alt="Pineapple-logo" />
            </div>
            <div className="HW_container">
                <div className="HW_container_context">Hello World!</div>
                <div className="HW_container_context">My name is Robin and im a Front-end developer.</div>
            </div>
            <div className="mouse-div">
                <img className="mouse-img" src={mouse} alt="mouse-scroll" />
            </div>
        </div>
        <div className="qs_landingpage">
            <img className="qs_landingpage_screen" src={QS} alt="Quick Solution page"/>
            <div className="qs_case_container">
                <div className="qs_case_title">01 - Quick Solution</div>
                <div className="qs_case_hastags">#HTML, #CSS, #Javascript, #ANIMATIONS</div>
                <div className="qs_case_context">Customer wanted animations on there site. While i starting to inspect how to apply the animations i saw a bad lighthouse score due to a lot of “deadcode”. So i re-coded the whole site and added animations.</div>
            </div>
        </div>
        
        
        
        </div>
    );

}

export default App;

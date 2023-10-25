import React from "react";

import head from "../assets/images/hero-car.jpg"





const Home = () => {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center">
            <h1>High Quality For Cheap Prices.</h1>
            <p className="col-lg-5 fs-2">
                Always wanted to drive a luxury car but never had the money? Well now you can! We offer the best cars for the best prices.
            </p>
            <button className="btn btn-primary btn-sm text-center rounded-5" style={{padding:'15px', width:'200px'}}>Get Started</button>
            </div>
            <div className="d-flex align-items-center">
            <img src={head} alt="hero" className="rounded-5" style={{height:'500px', width:'500px'}}/>
            </div>
        </div>
    )
}


export default Home;
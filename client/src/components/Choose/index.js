import React from "react";
import hero from "../../assets/images/car2.jpg";



const Choose = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center text-left" style={{height:'150vh'}}>
            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                <img src={hero} alt="hero" className="hero mx-auto"></img>
        <div className="d-flex flex-row justify-content-around align-items-center text-left">
            <div className="col-lg-3 m-5">
            <h2>Why Choose Us</h2>
            <h1>Best valued deals you will ever find</h1>
            <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
            <button className="btn btn-sm text-center rounded-5 text-dark m-2 fs-5" style={{padding:'15px', width:'200px', backgroundColor:'orange'}}>Find Deals</button>
            </div>
            <div className="">
                <ul>
                    <li>
                        <h2>Best Price Guarantee</h2>
                        <p>Our prices are unbeatable. We guarantee it.</p>
                    </li>
                    <li>
                        <h2>Unlimited Miles</h2>
                        <p>Drive as much as you want. No extra fees.</p>
                    </li>
                    <li>
                        <h2>Flexible Pick-Up</h2>
                        <p>Pick up your car at any time of the day.</p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        </section>
    )
}




export default Choose;
import React from "react";




const Home = () => {
    return (
<div style={{height:'80vh'}}>
    <div className="hero">
        <div className="d-flex flex-row justify-content-center align-items-center p-5">
            <div className="d-flex flex-column align-items-center">
            <h2 className="text-dark fs-1">Plan Your Trip Now</h2>
            <h1 className="text-light fs-1">Save With Ditto Car Rentals</h1>
            <p className="col-lg-6 fs-3 text-light">
            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
            </p>
            <div className="d-flex flex-row align-items-center">
            <button className="btn btn-sm text-center rounded-5 text-dark m-2 fs-5" style={{padding:'15px', width:'200px', backgroundColor:'orange'}}>Book A Ride</button>
            <button className="btn btn-sm text-center rounded-5 text-light fs-5" style={{padding:'15px', width:'200px', border:'1px solid orange'}}>Learn More</button>
            </div>
            </div>
            <div className="d-flex align-items-center">
            </div>
        </div>
    </div>
</div>
    )
}


export default Home;
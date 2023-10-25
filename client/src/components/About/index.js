import React from "react";




const About = () => {

        return (

            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 text-center">
                <h1>Quick & easy car rental</h1>
                <p>Great cars. Low rates. Free cancellation.</p>
                <div>
                    <ul className="d-flex flex-row justify-content-center align-items-center m-4" style={{listStyle:'none'}}>
                        <li>
                            <h2 className="col-lg-9 fs-4">Book A Ride</h2>
                            <p className="col-lg-9">
                                Search for a car rental location or browse the list below.
                            </p>
                        </li>
                        <li>
                            <h2 className="col-lg-9 fs-4">Contact Support</h2>
                            <p className="col-lg-9 ">
                                Contact us with any questions or concerns.
                            </p>
                        </li>
                        <li>
                            <h2 className="col-lg-9 fs-4">Ready Set Drive</h2>
                            <p className="col-lg-9">
                                Find the nearest car rental location.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }



export default About;


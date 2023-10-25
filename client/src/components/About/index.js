import React from "react";




const About = () => {

        return (

            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 text-center" style={{height:'100vh'}}>
                <h1>Quick & easy car rental</h1>
                <p>Great cars. Low rates. Free cancellation.</p>
                <div>
                    <ul className="d-flex flex-row justify-content-center align-items-center m-4" style={{listStyle:'none'}}>
                        <li className="col-sm-3 fs-4 m-5">
                            <h2>Book A Ride</h2>
                            <p>
                                Search for a car rental location or browse the list below.
                            </p>
                        </li>
                        <li className="col-sm-3 fs-4 m-5">
                            <h2>Contact Support</h2>
                            <p>
                                Contact us with any questions or concerns.
                            </p>
                        </li>
                        <li className="col-sm-3 fs-4 m-5">
                            <h2>Ready Set Drive</h2>
                            <p>
                                Find the nearest car rental location.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }



export default About;


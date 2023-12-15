import React from "react";




const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-top">
                <h1>Ditto</h1>
                <p>Rentals starting at $22/day</p>
            </div>

            <div className="home-bottom">
                <div className="home-bottom-buttons">
                    <button>Explore Inventory</button>
                    <button id="b-b">Book A Car</button>
                </div>
                <div className="home-bottom-p">
                    <p>*Excludes taxes and fees with price subject to change. Available in select states. <span id="see">See Details</span></p>
                </div>

            </div>


        </div>
    )
}


export default Home;
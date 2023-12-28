import React from "react";




const Home = () => {
    return (
        <>
        <section className="home-wrapper">
            <div className="home-top">
                <h1>Ditto</h1>
                <p>Lease starting at $300/mo</p>
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




        </section>
        <section className="tesla-wrapper">
            <div className="tesla-content">
                     <h2>Tesla</h2>
            </div>
       
        </section>
        <section className="sport-wrapper">
        <div className="tesla-content">
                     <h2>Sport</h2>
            </div>
        </section>
        <section className="luxury-wrapper">
        <div className="tesla-content">
                     <h2>Luxury</h2>
            </div>
        </section>
        <section className="suv-wrapper">
        <div className="tesla-content">
                     <h2>Suv</h2>
            </div>
        </section>
        </>
    )
}


export default Home;
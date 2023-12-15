import React from "react";





const Testimonials = () => {

        return (
            <section className="d-flex flex-column justify-content-center align-items-center text-center mx-auto" style={{height:'100vh'}}>
                <div style={{height:'500px', width:'75%', borderRadius:'10px', backgroundColor:'gray', padding:'50px'}}>
                    <div className="col-lg-6 mx-auto">
                        <h1>What Our Customers Say</h1>
                        <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                    </div>
                        <div className="container mt-4">
                            <div className="card d-flex flex-row">
                                <div className="card-body">
                                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
                                    <h5 className="card-title">Billy Doe</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">CEO of ABC Inc.</h6>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
                                    <h5 className="card-title">John Doe</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">CEO of NBC Inc.</h6>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
                                    <h5 className="card-title">Jane Doe</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">CEO of Pizza Inc.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }



export default Testimonials;

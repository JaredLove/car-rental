import React from "react";




const Contact = () => {
    return (
        <section className="d-flex flex-row justify-content-evenly align-items-center" style={{height:'500px'}}>
            <div className="">  
                <div>                
                <h1>Get in Touch</h1>                
                <p className="fs-4 text-dark">Have questions? We have answers.</p>
                <p className="fs-4 text-dark">(098) - 765 - 4321</p>
                <p className="fs-4 text-dark">Testemail@test.com</p>
                </div>

            </div>

                <div className="">
                    <h1>Our Locations</h1>
                    <p className="fs-4 text-dark">1234 Main Street San Antonio, TX</p>
                    <p className="fs-4 text-dark">4321 Main Street Austin, TX</p>
                    <p className="fs-4 text-dark">5678 Main Street Corpus Christi, TX</p>

                </div>

            <div className="">
                <h1>Working Hours</h1>
                    <p className="fs-4 text-dark">Mon - Fri: 8:00AM - 9:00PM</p>
                    <p className="fs-4 text-dark">Sat 8:00AM - 5:00PM</p>
                    <p className="fs-4 text-dark">Sun: Closed</p>
            </div>
        </section>
    )
}



export default Contact;
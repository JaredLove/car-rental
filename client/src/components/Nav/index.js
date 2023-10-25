import React from "react";




const Nav = () => {
    return (
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-brand">Navbar</button>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <button class="nav-link active">Home</button>
                </li>
                <li class="nav-item">
                <button class="nav-link">Services</button>
                </li>
                <li class="nav-item">
                <button class="nav-link">About Us</button>
                </li>
                <li class="nav-item">
                <button class="nav-link">Book A Ride</button>
                </li>
                <li class="nav-item">
                <button class="nav-link">Contact Us</button>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
    );
    };


export default Nav;
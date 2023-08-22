import React from "react";
import logo from "../images/Logo .svg";

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="logo" />
                    <p>We are a family owned Mediterranean restuarant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Address: 1234 Main Street, Anytown, USA</li>
                        <li>Phone: 1-800-555-5555</li>
                        <li>Email: little.lemon@email.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Youtube</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    );
}

export default Footer;
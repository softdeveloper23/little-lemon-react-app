import React from "react";

const Header = () => {
    return (
        <header className="header">
            <section>
                {/* Banner texts */}
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href="/booking"><button aria-label="On Click">Reserve a table</button></a>
                </div>
            </section>
        </header>
    );
};

export default Header;
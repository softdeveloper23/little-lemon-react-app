import React from "react";
import recipes from "../recipes";

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This Week's Specials!</h2>
                <button>Order From The Menu</button>
            </div>
            {/* Menu cards go here */}
            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id}>
                        <img src={recipe.image} alt={recipe.title} />
                        <div>
                            <div>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderBtn">Place An Order</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Menu;
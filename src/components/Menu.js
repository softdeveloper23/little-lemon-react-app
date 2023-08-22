import React from "react";
import recipes from "../recipes";
import Swal from 'sweetalert2';

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id, "order placed");
        Swal.fire({
            title: 'Do you want to order this?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, order it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Ordered!',
                    'Your order is being processed.',
                    'success'
                )
            }
        })
    }
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This Week's Specials!</h2>
                <button>Order From The Menu</button>
            </div>
            {/* Menu cards go here */}
            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt={recipe.title} />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Place An Order</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Menu;
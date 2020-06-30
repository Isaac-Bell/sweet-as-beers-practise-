import React from 'react'

const BeerListItem = (props) => (

    <div class="beer">
        <p class="name">{props.name}</p>
        <p class="description">{props.description}</p>
        <p>
            <span class="country">{props.country}</span>
            <span class="abv">{props.abv}</span>
            <a href="/designs/cart.html" class="cart-link">Add to cart</a>
        </p>
    </div>

)

export default BeerListItem
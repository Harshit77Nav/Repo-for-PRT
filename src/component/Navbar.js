import React from 'react'
import heart from "./images/path/path@2x.png"
import user from "./images/path/user.png"
import arrow from "./images/path/arrow.png"
import cart from "./images/path/cart.png"
import "./Nav.css"

function Navbar() {
  return (
    <div>
        <div className='navblack'>
            <p><img alt='' src={user}/> HARSHIT NAVNEET <img alt='' src={arrow}/></p>
            <p>CART <img alt='' src={cart}/></p>
            <p>WISHLIST <img alt='' src={heart}/></p>
        </div>
        <div className='navwhite'>
            <li className='kraya'>KRAYA</li>
            <li>PHONE</li>
            <li>TELEVISION</li>
            <li>REFRIGERATOR</li>
            <li>LAPTOP</li>
            <li>WASHING MACHINE</li>
            <li>DOWNLOADS</li>
            <li><input placeholder='search for product..' type={"search"}/></li>
        </div>
    </div>
  )
}

export default Navbar
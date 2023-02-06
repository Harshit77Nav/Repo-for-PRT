import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useState } from 'react'
import Navbar from './Navbar'
import star from "./images/path/red.png"
import whitestar from "./images/path/white.png"
import "./Prod.css";

function Product() {
    const arr = [1,2,3,4]
    const [color, setColor] = useState("Midnight Black")
    const [storage, setStorage] = useState("128GB")
    const [RAM, setRAM] = useState("6GB")
    const [price, setPrice] = useState({
        dis:"99.99",
        main:"149.99",
        off:"30%"
    })

  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='part1'>
                <p>HOME / MOBILES</p>
                <Carousel className="caro_box">
                <div>
                    <img alt="" className="caro_img" src="https://rukminim1.flixcart.com/image/416/416/j70sccw0/mobile/z/g/j/honor-8-pro-duke-l09-v100r001-original-imaexdy3pcegz3df.jpeg?q=70" />
                </div>
                <div>
                    <img alt="" className="caro_img" src="https://rukminim1.flixcart.com/image/416/416/j70sccw0/mobile/z/g/j/honor-8-pro-duke-l09-v100r001-original-imaexdy3qgurza7t.jpeg?q=70" />             
                </div>
                <div>
                    <img alt="" className="caro_img" src="https://rukminim1.flixcart.com/image/416/416/j70sccw0/mobile/z/g/j/honor-8-pro-duke-l09-v100r001-original-imaexdy3rhuskzgr.jpeg?q=70" />
                </div>
                <div>
                    <img alt="" className="caro_img" src="https://rukminim1.flixcart.com/image/416/416/j70sccw0/mobile/z/g/j/honor-8-pro-duke-l09-v100r001-original-imaexdy3n5hfpnfx.jpeg?q=70"/>
                </div>
                </Carousel>
                <div className="btn_box">
                    <button id="white_btn" className="btn_addnbuy">Add to Cart</button>
                    <button id="blue_btn" className="btn_addnbuy">Buy now</button>
                </div>
            </div>
            <div className="part2">
                <p>product code 0DE349879</p>
                <p className="Prod_heading">Honor 8 Pro ({color}, {storage})<br/>({RAM} RAM)</p>
                <span>
                {arr.map((item)=>{
                    return(
                        <img key={item} src={star} alt=""/>
                    )
                })}
                <img src={whitestar} alt=""/><span className="rating">(9,303)</span>
                </span>
                <div>$ <span className="price">{price.dis}</span><span className="greyprice"> &nbsp;${price.main}</span> &nbsp;<b>{price.off} off</b></div>
                <p className="stock">In stock</p>
                <div className="border">
                    <span className="prod_color">color &nbsp;</span><span className="prod_colorname"> Sapphire Blue</span>
                    <div className="color_box">
                    <div id="div_blue" className="circle_blue" onClick={()=>{setColor("Phantom Blue");}}></div>
                    <div id="div_black" className="circle_blue" onClick={()=>{setColor("Midnight Black");}}></div>
                    <div id="div_grey" className="circle_blue" onClick={()=>{setColor("Shady Grey")}}></div>
                    </div>
                </div>
                <div className="select_variable">
                    <div>
                        <span className="greyprice">Storage </span><span>32GB</span>
                        <div className="GBdata">
                            <div id="sideRed" className="gbBox" onClick={()=>{setStorage("64GB");setPrice({...price,dis:"96.99",off:"32%"})}}>64GB</div>
                            <div className="gbBox" onClick={()=>{setStorage("128GB");setPrice({...price,dis:"99.99",off:"30%"})}}>128GB</div>
                        </div>
                    </div>
                    <div>
                        <span className="greyprice">RAM </span><span>4GB</span>
                        <div className="GBdata">
                            <div className="gbBox" onClick={()=>{setRAM("2GB");setPrice({...price,dis:"98.99",off:"31%"})}}>2GB</div>
                            <div id="sideRed" className="gbBox" onClick={()=>{setRAM("4GB");setPrice({...price,dis:"99.99",off:"30%"})}}>4GB</div>
                        </div>
                    </div>
                </div>
                <div className="prod_details">
                    <p>+&nbsp; PRODUCT DETAILS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
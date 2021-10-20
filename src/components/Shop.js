import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from "react";
const { items }  = require("./items");

const Shop = () => {

    useEffect(()=>{
        // Add hover listeners to all images in the shop
        items.forEach(item => {
            let image = document.getElementById(item.id);
            image.addEventListener('mouseenter', (e) => setTimeout(() => e.target.src = item.imgHover , 50));
            image.addEventListener('mouseout', (e) => e.target.src = item.img);
        })
    },[])

    return (
        <div className='catalog'>
            {items.map(item => {
                return (
                <Link to={`/shop/${item.id}`} key={item.id}> 
                    <div className='image-wrapper'>
                        <img src={item.img} id={item.id} alt={item.itemName}/>
                    </div>
                    <div>{item.itemName}</div>
                    <div>{item.price}</div>
                </Link>)
                
                
            })}

        </div>
    );
};

export default Shop;
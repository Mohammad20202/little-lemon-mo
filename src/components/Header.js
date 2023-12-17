import React from 'react';
import { link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg';

export const Header = () => {
    return (
        <header className='header'>
            <section>
        <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>San Francisco</h3>
            <p>We are a family owned Mediterraneran Resturant, focused on traditional recipes servred with a modern twist.</p>
          
            <a href="/booking">
             <button aria-label="Reserve Table">Reserve Table</button>
            </a>
           
        </div>
        <div className='banner-img'>
            <img src={bannerImg} alt=''/>

        </div>
        </section>
        </header>
    );
};

export default Header;
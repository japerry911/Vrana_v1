import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='navigation-bar'>
            <img
                src='https://lh3.googleusercontent.com/8fjwdbCoyp0Bcr8oHQvEjdy9HMDdReZcdYX6U1iB-n-98piPT4gEpELtJ14a0Zx2Fb23gzmRnswBRu2mOIZ1X4p3BJm8CqAQbR-npbrb6cGoyjbzMHrKNmga3wva72ZQ0_PMtGbeADKUuGYQZrztum9WC_rZQgXly-82jmcL6O0BDICbUre3fYHL8QjDEVioiN8sDpw2hl1bVGe1h171u46Ws3O51yQsr95tSDKd9wYXcghDZZ1EMVvGJIuL61WnwbhiGgEZwjBuYhTs2rpyAy0r4UC0IHNA2NHlYiPSbRBxfQz7MuPFfemJPfEnrMWUNnrf86MZoSix9aUeHFS_HVMLNTdGDzUx8TqRKDaBe-chfeimqnRAcxgvwkRj5VCpNQgOKJQClVzVmIKDqQOdc36B7RGQwVu2kekoaynRhLmloWX9H0vWsJtFuv04U5A8-BA9pS1aUtLYa2gpD0j9Uh5c2sCslilEeMIOz_z1FEAyhukgbpHLtGnBwUH82LUPifEChWLT4F8z2FQ4nFYknRyXi4Akizwlvhy0kKRiHj-4GfydegzneuTDFzd-meBzTgy-vcvnBiOMEmKH-sH6EWPtV96T0BwdmqHcB6hbXRRVxJIVt7U7dLpqoesuLmZ0HotbU0YqspSwY5yvbhpP2PRHexgQV2o-IASt1yS8UlIygAYT9j0I1TgcJUsGHQ=w988-h396-no'
                className='vrana-nav-image'
            />
            <div className='nav-link-div'>
                <a className='nav-link' href='/'>HOME</a>
                <a className='nav-link' href='/about'>ABOUT</a>
                <a className='nav-link' href='/services'>SERVICES</a>
                <a className='nav-link' href='/our-work'>OUR WORK</a>
                <a className='nav-link' href='/safety'>SAFETY</a>
                <a className='nav-link' href='/shop'>SHOP</a>
                <a className='nav-link' href='/news'>NEWS</a>
                <a className='nav-link' href='/careers'>CAREERS</a>
                <a className='nav-link' href='/contact-us'>CONTACT US</a>
            </div>
        </nav>
    );
};

export default Navigation;
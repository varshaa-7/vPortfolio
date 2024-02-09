import { React,useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";

const Header1 = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
    <header>
			<Link to="/" className='title'>
                 <img
                     src="https://i.ibb.co/xCR1BXR/p-removebg-preview.png"
                     className="mr-3 h-12"
                     alt="Logo"
                 />
             </Link>
            <nav ref={navRef}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/contact">Contact</NavLink>
				<NavLink to="/github">Github</NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  )
}

export default Header1

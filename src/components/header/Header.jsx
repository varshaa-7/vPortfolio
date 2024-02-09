
// import { React,useState } from 'react';
// import {Link, NavLink} from 'react-router-dom'
// import "./Header.css"
// export default function Header() {
//     const [menuOpen, setMenuOpen] = useState(true);

//     return (
        // <header className="shadow sticky z-50 top-0">
        //     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        //             <Link to="/" className="flex items-center">
        //                 <img
        //                     src="https://i.ibb.co/xCR1BXR/p-removebg-preview.png"
        //                     className="mr-3 h-12"
        //                     alt="Logo"
        //                 />
        //             </Link>
                    
        //             <div
        //                 className="flex justify-center items-center w-full lg:flex lg:w-auto lg:order-1"
        //                 id="mobile-menu-2"
        //             >
        //                 <ul className="flex justify-center items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        //                     <li>
        //                         <NavLink
        //                         to="/"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
        //                             }
        //                         >
        //                             Home
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/about"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
        //                             }
        //                         >
        //                             About
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/contact"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
        //                             }
        //                         >
        //                             Contact
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/github"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
        //                             }
        //                         >
        //                             Github
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/user"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
        //                             }
        //                         >
        //                             User
        //                         </NavLink>
        //                     </li>
                            
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>
//         <nav className='sticky'>
//             <Link to="/" className='title'>
//                 <img
//                     src="https://i.ibb.co/xCR1BXR/p-removebg-preview.png"
//                     className="mr-3 h-12"
//                     alt="Logo"
//                 />
//             </Link>
//             <div className="menu"
//             onClick={()=>{
//                 setMenuOpen(!menuOpen);
//             }}>
//                 <span></span>
//                 <span></span>
//                 <span></span>

//             </div>
//             <ul className={menuOpen ? "open" : ""} >
//                 <li>
//                     <NavLink to="/" >Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/about" >About</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/contact" >Contact</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/github" >Github</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/user" >User</NavLink>
//                 </li>
//             </ul>
//         </nav>
//     );
// }


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;


// import React from 'react'
// import {Link, NavLink} from 'react-router-dom'

// export default function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                             className="mr-3 h-12"
//                             alt="Logo"
//                         />
//                     </Link>
                    
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                 to="/"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/about"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/contact"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/github"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Github
//                                 </NavLink>
//                             </li>
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./main.css";
// import {Link, NavLink} from 'react-router-dom'

// function Navbar() {
// 	const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};

// 	return (
// 		<header>
			// <Link to="/" className='title'>
            //      <img
            //          src="https://i.ibb.co/xCR1BXR/p-removebg-preview.png"
            //          className="mr-3 h-12"
            //          alt="Logo"
            //      />
            //  </Link>
			// <nav ref={navRef}>
			// 	<NavLink to="/">Home</NavLink>
			// 	<NavLink to="/about">About</NavLink>
			// 	<NavLink to="/contact">Contact</NavLink>
			// 	<NavLink to="/github">Github</NavLink>
			// 	<button
			// 		className="nav-btn nav-close-btn"
			// 		onClick={showNavbar}>
			// 		<FaTimes />
			// 	</button>
			// </nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// }

// export default Navbar;

import { React,useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";

function Navbar() {
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
	);
}

export default Navbar;
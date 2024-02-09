
import {Link} from 'react-router-dom'
import Atropos from 'atropos/react';
import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );
  
//   const card = (
//     <React.Fragment>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </React.Fragment>
//   );
  

export default function About() {
    return (
        <div className="py-16 bg-violet-200">
            <div className="container m-auto px-6 text-gray-600">
               
                    
                    
                        <h2 className="text-xl text-gray-800 font-bold md:text-2xl">
                          Hey! Im Varsha Awasthi, a whirlwind of code and creativity currently in my second year of B. Tech Computer Science Engineering.
                        </h2><br/>
                        
                        <h2 className="text-2xl text-violet-900 font-bold md:text-5xl">
                          Skills
                        </h2>
                        <h2 className="text-xl text-purple-600 font-bold md:text-3xl p-10 ">
                          Development
                        </h2>
                        
                                    
                                        <h2 className="text-xl text-purple-900 font-bold md:text-xl  ">
                                        HTMP, CSS
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl  ">
                        JavaScript
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl  ">
                        ReactJs, NextJS
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl  ">
                        AOS, React Router
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl  ">
                        NodeJS, ExpressJS
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl  ">
                        SQL, MongoDB
                        </h2>
                        <h2 className="text-xl text-purple-600 font-bold md:text-3xl p-10  ">
                          Other Skills
                        </h2>
                        
                                    
                                        <h2 className="text-xl text-purple-900 font-bold md:text-xl ">
                                        DSA
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl  ">
                        OOPS
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl ">
                        C++
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl ">
                        C
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl ">
                        Python
                        </h2>
                        <h2 className="text-xl text-purple-900 font-bold md:text-xl ">
                        Git,Github
                        </h2>
                                    </div>
                                    {/* <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box> */}

                        
                       {/* <div className=" max-w-8xl mx-auto items-center justify-center">
//                         <div className=" overflow-hidden items-center justify-center">
//                             <div className="p-20 m-25 grid grid-cols-1 md:grid-cols-2 items-center justify-center flex space-x-2">
                            
//                                 <div className="p-20 m-25 bg-purple-300 hover:bg-purple-500 sm:rounded-lg sticky items-center justify-center space-x-4">
//                                     <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight justify-center">
//                                         Development
//                                     </h1>
                                    


//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             HTMP, CSS
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center mt-4 text-gray-600">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                         JavaScript
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             ReactJs, NextJS
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             AOS, React Router
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             NodeJS, ExpressJS
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             SQL, MongoDB
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <Atropos className="my-atropos">
//                                 <div className="p-20 m-15 bg-purple-300 hover:bg-purple-500 sm:rounded-lg items-center justify-center">
//                                     <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight justify-center">
//                                         Other Skills
//                                     </h1>
                                    


//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             DSA
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             OOPS
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             C++
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             C
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             Python
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center mt-4 text-gray-600 hover:text-gray-900">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="purple" strokeWidth="2">
//                                         <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3"/>
//                                         <path d="M8 12l3 3 6-6"/>
//                                         </svg>
//                                         <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                             Git, Github
//                                         </div>
//                                     </div>

                                    
//                                 </div>
//                                 </Atropos>
//                             </div>
//                         </div>
    </div> */}
                    
                    </div>
               
            
       
    );
}


// import React from "react";
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import './About.css'; 
// export default function About() {
// return (
//     <div id="about" className="container2">
//     <h5>Get to know</h5>
//     <h2>About Me</h2>
//     <div className="about_parent">
//       <div>
//         <div className="about_img1">
//             <div className="about_img2">

//             </div>
//         </div>
//       </div>
//         <div className="about_content">
//             <div className="about_content_skills">
//             <a href="#skills" className="Box">
//                 <LibraryBooksIcon className="about_icn"/>
//                 <p>Skills</p>
                
//                 </a>
//                 <a href="#projects"><div className="Box">
//                 <LaptopMacIcon className="about_icn"/>
//                 <p>Projects</p>
//                 </div>
//                 </a>
//             </div>
//             <div className="about_content_description">
//             <p>I am Tanya singh, a student at MMMUT, currently pursuing Btech with Information Technology branch. I am a coding enthusiast with great amount of zeal and passion to contribute in tech industry. </p>
//             </div>
//             <a href="#contact"><button className="btn btn-primary">Lets talk</button></a>
//         </div>
//     </div>
//     </div>
// );
//  }

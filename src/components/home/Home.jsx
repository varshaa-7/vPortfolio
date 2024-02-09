import {React,useState} from 'react'
import { Link } from 'react-router-dom';
import {ReactTyped} from 'react-typed';

export default function Home() {
    const [text1, setText1] = useState("Hey! I'm Varsha Awasthi");
    const [text2, setText2] = useState("A Frontend Developer");

    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden  text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-0 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto  lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl blinking-cursor">
                        <ReactTyped
                            strings = {[
                                "Hey! I'm Varsha",
                                
                            ]}
                            typeSpeed ={100}
                            backSpeed ={100}
                            loop
                            ><input type="text" />
                            </ReactTyped>
                            
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-purple-900 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            
                            &nbsp; Download CV
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/gJLvSGT/webdev.webp" alt="image1" />
                </div>
            </aside>

            
        </div>
    );
}
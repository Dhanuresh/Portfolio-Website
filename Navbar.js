import React from 'react';
import mylogo from './MY-LOGO.png';
export default function Navbar() {
    return (
        <nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
                        backdrop-blur-lg fixed top-0 z-10">
            <div className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center max-w-5xl mx-auto ">
         <img src=
 {mylogo}
                    alt="About"
                    className="w-20 h-20 hover:animate-spin"/>
                    <span> <h3 className="text-3xl bg-gradient-to-r from-yellow-300 via-green-300 to-slate-200 inline-block text-transparent bg-clip-text font-bold mr-60 hover:animate-bounce">
                    DHANURESH A
                </h3></span>
               
                <ul className="flex gap-3 align-center p-1 flex-wrap 
                
                
                ">
                    <li className='hover:animate-bounce'>
                        <a className="text-sm sm:text-base px-2 lg:px-5 text-violet-500
                                      py-2 transition rounded hover:text-white
                                      hover:bg-yellow-400 
                                      "
                                      
                                      
                                     
                                     
                                      
                           href="#about" style={{fontWeight:"bold",fontSize:"20px"}}>                           
                                                
                       ABOUT
                        </a>
                    </li>
                    <li className='hover:animate-bounce'>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 text-violet-500
                                      transition rounded hover:text-white 
                                      hover:bg-yellow-400"
                            href="#skills" style={{fontWeight:"bold",fontSize:"20px"}}>
                           SKILLS
                        </a>
                    </li>
                    <li className='hover:animate-bounce'>
                        <a className="text-sm sm:text-base px-2 lg:px-2 py-2 text-violet-500
                                      transition rounded hover:text-white 
                                      hover:bg-yellow-400"
                            href="#projects" style={{fontWeight:"bold",fontSize:"20px"}}>
                            DESIGNS
                        </a>
                    </li>
                    <li className='hover:animate-bounce'>
                        <a className="text-sm sm:text-base px-2 lg:px-0 py-2 text-violet-500
                                      transition rounded hover:text-white 
                                      hover:bg-yellow-400"
                            href="#contact" style={{fontWeight:"bold",fontSize:"20px"}}>
                           CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

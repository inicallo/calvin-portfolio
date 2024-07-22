import toggle from "../toggle";
import Hero from "./Hero";
import React, { useRef, useEffect } from 'react';
import img from "../../filefoto/CASTUDIO.png";


export default function Navbar() {
    const hamburgerRef = useRef(null);
    const navMenuRef = useRef(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navMenu = navMenuRef.current;

    const handleClick = () => {
      toggle(hamburger, navMenu);
    };

    hamburger.addEventListener('click', handleClick);

    return () => {
      hamburger.removeEventListener('click', handleClick);
    };
  }, []);
    
  return (
        <section>
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#hero">
                            <img src={img} alt="calvin angelo" className="max-w-full mx-auto mt-2" style={{ width: '200px', height: 'auto' }} />
                        </a>
                    </div>
                    <div className="flex items-center px-4">
                        <button 
                        id="hamburger" 
                        name="hamburger" 
                        type="button" 
                        className="block absolute right-4 lg:hidden" ref={hamburgerRef}
                        >
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                        
                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none" ref={navMenuRef}>
                            
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base font-medium text-dark1 py-2 mx-8 flex group-hover:text-primary">Home</a>
                                 </li>
                                <li className="group">
                                    <a href="#about" className="text-base font-medium text-dark1 py-2 mx-8 flex group-hover:text-primary">About</a>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="text-base font-medium text-dark1 py-2 mx-8 flex group-hover:text-primary">Portfolio</a>
                                </li>
                                <li className="group">
                                    <a href="#clients" className="text-base font-medium text-dark1 py-2 mx-8 flex group-hover:text-primary">Clients</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="text-base font-medium text-dark1 py-2 mx-8 flex group-hover:text-primary">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
      </section>
    )
}

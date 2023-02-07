import React from 'react'
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import '../styles/components/Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav>
            <div className="upper-nav-section">
                <div className="px-[10px] lg:container flex flex-row justify-between mx-auto p-2 lg:justify-between flex-wrap md:flex-nowrap ">
                    <div className="logo_container py-2 flex justify-center lg:block order-1">
                        <img src={Logo} alt="logo" className="h-[55px]" />
                    </div>

                    <div className="searchbar order-last md:order-2 flex align-center justify-center my-auto py-2 drop-shadow-md font-cabin w-full">
                        <input type="text" className='outline-none border border-[#D0D7DE] border-solid  rounded-l-[3px] px-[12px] py-[5px] text-sm w-[30rem] md:w-[23rem] lg:w-[25rem] flex grow-1' />
                        <button type="submit" className="bg-[#276955] text-white text-sm rounded-r-[3px] px-[10px] py-[7px] border-0 align-center flex grow-1">
                            Search
                        </button>
                    </div>

                    <div className="upper-nav-links order-3 md:order-2 flex align-middle justify-center py-2">
                        <div className="nav_list flex my-auto mx-2">
                            <Link to="/login" className='px-[8px] flex font-semibold font_cabin'><FaUser className='my-[3px] mx-[5px]'
                            /> Login</Link>
                            <Link to="/cart" className='px-[8px] flex font-semibold font_cabin'><FaShoppingCart className='my-[3px] mx-[5px]' /> Cart</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lower-nav-section bg-[#7BAE37]">
                <div className="container mx-auto">
                    <div className="burger-menu flex lg:hidden justify-end text-white py-[10px] px-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <GiHamburgerMenu style={{ fontSize: '20px' }} />
                    </div>
                    <div className={`${isOpen ? "flex" : "hidden"} flex-col lg:flex lg:flex-row w-full`}>
                        <Link to="#" className="nav-style lg:border-l-[1px] border-[rgb(255,255,255,0.45)]">Gardening</Link>
                        <Link to="#" className="nav-style">Plants</Link>
                        <Link to="#" className="nav-style">Fruits</Link>
                        <Link to="#" className="nav-style">Seeds</Link>
                        <Link to="#" className="nav-style">Peebles</Link>
                        <Link to="#" className="nav-style">Accessories </Link>
                        <Link to="#" className="nav-style">Soil</Link>
                        <Link to="#" className="nav-style">Fertilizers </Link>
                        <Link to="#" className="nav-style">Gifts</Link>
                        <Link to="#" className="nav-style">Blog</Link>
                        <Link to="#" className="nav-style">Flowering</Link>
                        <Link to="#" className="nav-style">Services</Link>
                    </div>

                </div>
            </div>
        </nav>

    )
}

export default Navbar
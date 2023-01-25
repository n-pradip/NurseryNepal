import React from 'react'
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../images/Nursery_nepal_logo.png'
import '../styles/components/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="upper-nav-section">
                <div class="container flex justify-between mx-auto p-2">
                    <div class="logo_container inline-block">
                        <img src={Logo} alt="logo" className="w-auto h-[55px]" />
                    </div>

                    <div className="searchbar flex align-center my-auto font-cabin text-">
                        <input type="text" className='outline-none border border-[#D0D7DE] border-solid rounded-l-[3px] px-[12px] py-[5px] text-base w-[25rem]' />
                        <button type="submit" className="bg-[#276955] text-white text-sm rounded-r-[3px] px-[10px] py-[5px] border-0 ">
                            Search
                        </button>
                    </div>

                    <div class="upper-nav-links flex align-middle justify-center">
                        <div class="nav_list flex my-auto mx-2">
                            <Link to="/login" className='px-[8px] flex font-semibold font-cabin'><FaUser className='my-[3px] mx-[5px]'
                            /> Login</Link>
                            <Link to="/cart" className='px-[8px] flex font-semibold font-cabin'><FaShoppingCart className='my-[3px] mx-[5px]' /> Cart</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="lower-nav-section">
                <div class="container mx-auto">
                    <div class="main_navigation_strip">
                        <a href="#" class="col cs_initial_border text-center">Gardening</a>
                        <a href="#" class="col text-center">Plants</a>
                        <a href="#" class="col text-center">Fruits</a>
                        <a href="#" class="col text-center">Seeds</a>
                        <a href="#" class="col text-center">Peebles</a>
                        <a href="#" class="col text-center">Accessories</a>
                        <a href="#" class="col text-center">Soil</a>
                        <a href="#" class="col text-center">Fertilizers</a>
                        <a href="#" class="col text-center">Gifts</a>
                        <a href="#" class="col text-center">Blog</a>
                        <a href="#" class="col text-center">Flowering</a>
                        <a href="#" class="col text-center">Services</a>
                    </div>
                </div>
            </div> */}
            <div class="bg-[#7BAE37]">
                <div class="container mx-auto">
                    <div class="main_navigation_strip flex w-full justify-between">
                        <a href="#" class="w-full p-[10px] cs_initial_border">Gardening</a>
                        <a href="#" class="w-full p-[10px] text-center ">Plants</a>
                        <a href="#" class="w-full p-[10px] text-center ">Fruits</a>
                        <a href="#" class="w-full p-[10px] text-center ">Seeds</a>
                        <a href="#" class="w-full p-[10px] text-center ">Peebles</a>
                        <a href="#" class="w-full p-[10px] text-center ">Accessories</a>
                        <a href="#" class="w-full p-[10px] text-center ">Soil</a>
                        <a href="#" class="w-full p-[10px] text-center ">Fertilizers</a>
                        <a href="#" class="w-full p-[10px] text-center ">Gifts</a>
                        <a href="#" class="w-full p-[10px] text-center ">Blog</a>
                        <a href="#" class="w-full p-[10px] text-center ">Flowering</a>
                        <a href="#" class="w-full p-[10px] text-center ">Services</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
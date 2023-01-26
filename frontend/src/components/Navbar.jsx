import React from 'react'
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../images/Nursery_nepal_logo.png'
import '../styles/components/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="upper-nav-section">
                <div className="px-[10px] lg:container flex flex-row justify-between mx-auto p-2 lg:flex-row lg:justify-between">
                    <div className="logo_container py-2 flex justify-center lg:block">
                        <img src={Logo} alt="logo" className="h-[55px]" />
                    </div>

                    <div className="searchbar hidden md:flex align-center justify-center my-auto py-2 drop-shadow-md font-cabin lg:w-full">
                        <input type="text" className='outline-none border border-[#D0D7DE] border-solid  rounded-l-[3px] px-[12px] py-[5px] text-sm w-full md:w-20rem lg:w-[25rem] flex grow-1' />
                        <button type="submit" className="bg-[#276955] text-white text-sm rounded-r-[3px] px-[10px] py-[7px] border-0 align-center flex grow-1">
                            Search
                        </button>
                    </div>

                    <div className="upper-nav-links flex align-middle justify-center py-2">
                        <div className="nav_list flex my-auto mx-2">
                            <Link to="/login" className='px-[8px] flex font-semibold font_cabin'><FaUser className='my-[3px] mx-[5px]'
                            /> Login</Link>
                            <Link to="/cart" className='px-[8px] flex font-semibold font_cabin'><FaShoppingCart className='my-[3px] mx-[5px]' /> Cart</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-[#7BAE37]">
                <div class="container mx-auto">
                    <div class="flex flex-col lg:flex-row w-full justify-between">
                        <div className="searchbar_mobile_view flex align-center justify-center my-auto py-2 drop-shadow-md font-cabin md:hidden">
                            <input type="text" className='outline-none border border-[#D0D7DE] border-solid  rounded-l-[3px] px-[12px] py-[5px] text-sm w-full lg:w-[25rem] flex grow-1' />
                            <button type="submit" className="bg-[#276955] text-white text-sm rounded-r-[3px] px-[10px] py-[7px] border-0 align-center flex grow-1">
                                Search
                            </button>
                        </div>
                        <Link to="#" class="nav-style lg:border-[1px] border-[rgb(255,255,255,0.45)]">Gardening</Link>
                        <Link to="#" class="nav-style">Plants</Link>
                        <Link to="#" class="nav-style">Fruits</Link>
                        <Link to="#" class="nav-style">Seeds</Link>
                        <Link to="#" class="nav-style">Peebles</Link>
                        <Link to="#" class="nav-style">Accessories </Link>
                        <Link to="#" class="nav-style">Soil</Link>
                        <Link to="#" class="nav-style">Fertilizers </Link>
                        <Link to="#" class="nav-style">Gifts</Link>
                        <Link to="#" class="nav-style">Blog</Link>
                        <Link to="#" class="nav-style">Flowering</Link>
                        <Link to="#" class="nav-style">Services</Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
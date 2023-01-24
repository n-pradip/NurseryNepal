import React from 'react'
import { Link } from 'react-router-dom'
import ButtonPrimary from '../components/ButtonPrimary'
import Logo from '../images/logo.png'
import BackgroundImage from '../images/single_tree.jpg'

const Register = () => {
    return (
        <div>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-8">
                    <div className="home_reference_section my-5">
                        <Link to="/" className='cursor-pointer'>
                            <figure className='flex justify-center items-center'>
                                <img src={Logo} alt="Logo" className='w-20' />
                            </figure>
                        </Link>

                    </div>
                    <div className="mx-auto max-w-lg text-center">
                        <Link to="/" className='cursor-pointer text-[#f2d16c] text-[34px] font-semibold '>
                            <span>Nursery Nepal</span>
                        </Link>
                    </div>

                    <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label for="full_name" className="sr-only">FullName</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter fullname" />
                            </div>
                        </div>

                        <div>
                            <label for="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email" />
                            </div>
                        </div>

                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter password" />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                Already have an account?&nbsp;
                                <Link to="/login" className="underline hover:font-semibold">Login</Link>
                            </p>

                            <ButtonPrimary text="Signup" />

                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src={BackgroundImage}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
        </div>
    )
}

export default Register
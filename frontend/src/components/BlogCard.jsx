import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/bogunvellia.jpg'
import ButtonPrimary from './ButtonPrimary'

const BlogCard = () => {
    return (
        <>
            <div className="w-60 sm:w-full bg-white border border-gray-200 rounded shadow p-[10px]">
                <img className="rounded-t-sm object-cover" src={Image} alt="" />
                <section className="py-[10px]">
                    <Link to="/">
                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                    </Link>
                    <p className="mb-3 text-base font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021...</p>
                    <Link to="/" >
                        <ButtonPrimary text="Read more" />
                    </Link>
                </section>
            </div>
        </>
    )
}

export default BlogCard
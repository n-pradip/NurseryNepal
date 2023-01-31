import React from 'react'
import Image from '../images/bogunvellia.jpg'
import ButtonPrimary from './ButtonPrimary'

const BlogCard = () => {
    return (
        <div>

            <div class="w-52 sm:w-72 bg-white border border-gray-200 rounded shadow">
                <a href="#">
                    <img class="rounded-t-sm" src={Image} alt="" />
                </a>
                <div class="p-[10px]">
                    <a href="#">
                        <h5 class="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 text-base font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021...</p>
                    <ButtonPrimary text="Read more"/>
                </div>
            </div>

        </div>
    )
}

export default BlogCard
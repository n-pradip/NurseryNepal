import React from 'react'
import { Link } from 'react-router-dom'

const TitleBar = (props) => {
    return (
        <>
            <div className="container mx-auto mt-8 mb-1 px-3 flex flex-row justify-between items-center">
                <div className="text-center text-[20px] text-gray-800 font_cabin font-bold">
                    {props.text}
                </div>
                <Link to={props.navigation_link} className="block text-[16px] text-gray-800 font_cabin underline cursor-pointer">
                    View all
                </Link>
            </div>
        </>
    )
}

export default TitleBar


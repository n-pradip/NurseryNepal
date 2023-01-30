import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'

const Card = () => {
    return (
        <div>
            <div className="w-72 bg-white drop-shadow-lg rounded-sm">
                <img className="object-cover rounded-tl-sm rounded-tr-sm"
                    src="https://www.kindacode.com/wp-content/uploads/2022/06/computer-example.jpg" />
                <div className="px-5 py-3 space-y-2">
                    <a href="#"><h3 className="text-[18px] font font-semibold">Boguenvilla Flower(scientific name)</h3></a>
                    <p className="space-x-2">
                        <span className="text-[18px] font-semibold">Rs. 450</span>
                        <span className="text-sm line-through text-gray-500">Rs. 1080</span>
                        <span className="text-base text-red-700">58.33% off</span>
                    </p>
                    <div className="flex justify-between items-center pt-3 pb-2">
                        <ButtonPrimary text="Add to cart"/>
                        <a href="#" title="Add to Favorites"
                            className="text-2xl text-gray-300 hover:text-red-500 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card
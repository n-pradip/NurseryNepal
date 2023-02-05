import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import ProductImage from '../images/bogunvellia.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div>
            <div className="w-60 sm:w-full p-[10px] drop-shadow-lg rounded-sm bg-white border-[1px] border-gray-200">
                <img className="object-cover rounded-t-sm" src={ProductImage} />
                <div className="py-2 space-y-2">
                    <Link href="#"><h3 className="text-[16px] font font-semibold">Boguenvilla Flower (scientific name)</h3></Link>
                    <div className='flex flex-wrap items-center justify-between'>
                        <div className="product-card-selling-cost">
                            <span className="text-[18px] font-semibold text-red-500">Rs. 450</span>
                        </div>
                        <div className="product-cardmarked-cost">
                            <span className="ml-2 text-sm line-through text-gray-500">Rs. 1080</span>
                            <span className="ml-2 text-base text-red-700">58.33% off</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-3 pb-2">
                        <ButtonPrimary text="Add to cart" />
                        <Link href="#" title="Add to Favorites" className="text-2xl text-gray-300 hover:text-red-500 duration-300"> &hearts; </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card
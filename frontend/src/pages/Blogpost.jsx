import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CiBookmark } from "react-icons/ci";
import Avatar from '../images/user_avatar.jpg'
import Banner from '../images/banner-1.png'
import TitlePrimary from '../components/TitlePrimary'
import BlogCard from '../components/BlogCard';

const Blogpost = () => {
    const dummyData = { title: "Lorem ipsum ipsum valoriti minkus ima dihi", author: "NNE", date: "2072/22/02", time: '07:30' }
    return (
        <>
            <Navbar />
            <figure>
                <img src={Banner} className="object-cover w-full" alt="" />
            </figure>
            <div className='container mx-auto px-20 py-5'>
                <h1 className=' font-bold text-4xl'>{dummyData.title}</h1>
                <span className='blogpost_details flex items-center color-black font-md text-md justify-between py-3'>
                    <div className="details text-xs font-base text-gray-700 px-1">
                        <div className="flex flex-row">
                            <div className="author_image_container flex items-center">
                                <img src={Avatar} alt="" className="h-10 w-10 object-cover rounded" />
                            </div>
                            <div className="flex flex-col pl-3">
                                <div className="author_name">
                                    {dummyData.author}
                                </div>
                                <div className="date mt-1">
                                    {dummyData.date} . {dummyData.time}
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
                <section className="font_cabin">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, quisquam! Laboriosam minima, fugiat quasi accusantium explicabo, asperiores sapiente ut voluptatibus consectetur id qui ab reiciendis! Quo enim quam adipisci doloribus et earum laboriosam, id debitis tempore harum atque repudiandae ratione, veniam nobis perferendis possimus quos exercitationem. Autem neque atque ducimus accusantium enim nam recusandae unde harum repellendus corrupti pariatur, magni exercitationem possimus inventore, quaerat eaque iusto totam tempora excepturi iste consequatur repellat, cum perferendis. Quis fugiat eum beatae necessitatibus illum ducimus illo voluptatibus, numquam aspernatur consectetur praesentium dignissimos dolor ex eligendi et, sint vitae, non molestiae consequatur! Similique repellendus fugit, veniam hic delectus laboriosam tempore molestiae nostrum dolore fugiat atque, debitis laudantium odio vel impedit soluta praesentium deserunt libero illum tenetur voluptates aut reiciendis? Cupiditate soluta quidem quo numquam tenetur cumque recusandae ea perferendis, atque ipsam illum quam culpa placeat exercitationem doloribus veritatis sapiente a? Possimus nam quibusdam vel veritatis, tempore inventore architecto assumenda repellendus hic, impedit natus quas sit quisquam voluptatem odit ducimus, ea culpa. Voluptate deserunt non totam ab placeat neque similique debitis, fugiat dolor voluptatem eum temporibus reiciendis ratione dolorum provident in numquam consequatur itaque vero rem qui iste facilis, error repudiandae. Aliquid voluptas delectus incidunt architecto.
                </section>
            </div>

            <TitlePrimary text="Other Articles" />
            <section className="blog-card-row container mx-auto px-20">
                <div className="flex flex-row overflow-x-scroll container-snap sm:flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 md:w-1/3  p-[15px]">
                        <BlogCard />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3  p-[15px]">
                        <BlogCard />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3  p-[15px]">
                        <BlogCard />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Blogpost
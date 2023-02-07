import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitlePrimary from '../components/TitlePrimary'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'

const Blog = () => {
  return (
    <div>
      <Navbar />
      <TitlePrimary text="Blogposts" />
      <div className="container mx-auto px-4 lg:px-10 flex flex-wrap justify-between">
        <div className="w-full flex justify-center sm:w-1/2 md:w-1/3 p-[15px]">
          <BlogCard />
        </div>
        <div className="w-full flex justify-center sm:w-1/2 md:w-1/3 p-[15px]">
          <BlogCard />
        </div>
        <div className="w-full flex justify-center sm:w-1/2 md:w-1/3 p-[15px]">
          <BlogCard />
        </div>
        <div className="w-full flex justify-center sm:w-1/2 md:w-1/3 p-[15px]">
          <BlogCard />
        </div>

      </div>
      <div className="flex align-center justify-center">
        <Pagination />

      </div>

      <Footer />
    </div>
  )
}

export default Blog
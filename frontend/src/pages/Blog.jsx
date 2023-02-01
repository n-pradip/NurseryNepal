import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitlePrimary from '../components/TitlePrimary'
import BlogCard from '../components/BlogCard'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <TitlePrimary text="Blogposts"/>
        <div className="container mx-auto px-10 flex flex-wrap justify-center">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog
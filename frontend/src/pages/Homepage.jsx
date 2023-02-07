import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import TitleBar from '../components/TitleBar'
import Card from '../components/Card'
import '../styles/pages/Homepage.css'
import FeatureBanner from '../components/FeatureBanner'
import BlogCard from '../components/BlogCard'
import DealOfTheWeek from '../components/DealOfTheWeek'
import SubscribeUs from '../components/SubscribeUs'


const Homepage = () => {
  return (
    <div>
      <Navbar />

      <Banner />
      {/* best selling section  */}
      <TitleBar text="Best selling products" />
      <section className="product-card-row container mx-auto px-[65px]">
        <div className="flex flex-row sm:flex-wrap overflow-x-scroll container-snap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 p-[15px]">
            <Card />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-[15px]">
            <Card />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 p-[15px]">
            <Card />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 p-[15px]">
            <Card />
          </div>
        </div>
      </section>

      <FeatureBanner />

      <TitleBar text="Pack of 5 offer" />
      <section className="product-card-row container mx-auto px-[65px]">
        <div className="flex flex-row sm:flex-wrap overflow-x-scroll container-snap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 p-[15px]">
            <Card />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-[15px]">
            <Card />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 p-[15px]">
            <Card />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 p-[15px]">
            <Card />
          </div>
        </div>
      </section>

      <TitleBar text="Blogposts" />
      <section className="blog-card-row container mx-auto px-[65px]">
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

      <DealOfTheWeek/>

      <SubscribeUs/>

      <Footer />
    </div>
  )
}

export default Homepage
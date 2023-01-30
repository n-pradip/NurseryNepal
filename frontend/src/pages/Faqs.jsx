import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleFaq from '../components/SingleFaq'
import TitlePrimary from '../components/TitlePrimary'

const Faqs = () => {
    return (
        <>
            <Navbar />
            <TitlePrimary text="Faqs" />
            <div className='container mx-auto '>
                <div class="space-y-4 px-10 max-sm lg:max-md xl:max-lg">
                    <SingleFaq
                        question="What are the shipping charges?"
                        answer="We charge Rs. 0 on any order that is to be delivered inside ringroad whereas outside ringroad we charge on basis of per kilometer Rs. 20."
                    />

                    <SingleFaq
                        question="What are the shipping charges?"
                        answer="We charge Rs. 0 on any order that is to be delivered in inside ringroad whereas outside ringroad we charge on basis of per kilometer Rs. 20."
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faqs
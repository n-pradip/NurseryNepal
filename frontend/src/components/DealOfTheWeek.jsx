import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import Card from './Card'

const DealOfTheWeek = () => {
    return (
        <div class="max-w-screen-2xl container mx-auto px-4 py-8 my-5">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div class="bg-[#8EC4E4] p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-xl text-center">
                        <h2 class="text-2xl font-bold text-white md:text-3xl">
                            Deal Of The Day
                        </h2>

                        <p class="hidden text-white/90 sm:mt-4 sm:block font_cabin">
                            {/* countdown timer */}
                        </p>

                        <div class="mt-4 md:mt-8">
                            <ButtonSecondary text="Grab the offer now" />
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
                    <div className="flex justify-center items-center">
                        <Card />
                    </div>
                    <div className="flex justify-center items-center">
                        <Card />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DealOfTheWeek
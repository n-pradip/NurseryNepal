import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const SubscribeUs = () => {
    return (
        <>
            <section class="bg-gray-50">
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                            Subscribe to Nursery Nepal
                        </h2>

                        <p class="hidden text-gray-500 sm:mt-4 sm:block">
                            Subscribe Nursery Nepal to get latest blogpost, tips, news about gardening and our services.
                        </p>
                    </div>

                    <div class="mx-auto mt-8 max-w-xl">
                        <form action="#" class="sm:flex sm:gap-4">
                            <div class="sm:flex-1">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none" />
                            </div>

                            <div className="flex sm:justify-center items-center mt-2 sm:mt-0 font_cabin">
                                <ButtonPrimary text="Subscribe" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SubscribeUs
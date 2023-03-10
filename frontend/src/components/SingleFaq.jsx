import React from 'react'

const SingleFaq = (props) => {
    return (
        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
            <summary
                class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                <h2 class="font-medium text-gray-900">
                    {props.question}
                </h2>

                <svg
                    class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>

            <p class="px-4 mt-4 leading-relaxed text-gray-700">
                {props.answer}
            </p>
        </details>
    )
}

export default SingleFaq
import React from 'react'

const ButtonPrimary = (props) => {
    return (
        <div>
            <button
                type="submit"
                className="ml-3 inline-block rounded bg-[#09B10C] hover:opacity-90 px-5 py-3 text-sm font-medium text-white">
                {props.text}
            </button>
        </div>
    )
}

export default ButtonPrimary
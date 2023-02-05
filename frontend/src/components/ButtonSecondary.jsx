import React from 'react'

const ButtonSecondary = (props) => {
    return (
        <div>
            <button
                type="submit"
                className="inline-block rounded border border[1px] border-white text-[#8EC4E4] hover:bg-[#8EC4E4] hover:text-white px-4 py-2 text-md font-medium bg-white active:bg-[#F7D66Cda] font_cabin">
                {props.text}
            </button>
        </div>
    )
}

export default ButtonSecondary


import React, { useState } from 'react'

function Filter(props) {
    let category = props.category
    let setCategory = props.setCategory

    function filterHandler(event) {
        setCategory(event.target.value)
    }

    return (
        <div className='w-11/12 max-w-max flex flex-wrap space-x-4 gap-y-4 
             mx-auto py-4 justify-center'>
            {props.filterData.map((data) => {
                return (
                    <button className={`px-6 py-2 bg-[#c0dbf2] rounded-md 
                    lext-lg font-medium hover:bg-opacity-60 border-2  transition-all 
                    duration-300 ${category === data.title ? " border-black/30" : "border-black/0"}`}
                        key={data.id}
                        onClick={filterHandler}
                        value={data.title}
                    >
                        {data.title}
                    </button>
                )
            })}
        </div>
    )
}

export default Filter
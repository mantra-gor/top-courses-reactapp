import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
        <div className='Spinner'/>
        <p className=' text-xl opacity-70 font-semibold'>
            Loading
        </p>
    </div>
  )
}

export default Spinner
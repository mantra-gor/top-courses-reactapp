import React, { useState } from 'react'
import { FcLike } from "react-icons/fc"
import { toast } from 'react-toastify'

function Card({ course }) {
  const [likedFlag, setLikedFlag] = useState(false)

  function likeClicked() {
    if (likedFlag) {
      toast.warning("Like Removed")
      setLikedFlag(false)
    }
    else {
      toast.success("Liked Successfully")
      setLikedFlag(true)
    }
  }
  return (
    <div className='w-[300px] bg-[#6CB4EE]/40 rounded-lg overflow-hidden'>
      <div className=' relative'>

        <img src={course.image.url} alt={course.image.alt} />

        <div className='w-[40px] h-[40px] bg-white rounded-full flex 
            justify-center items-center absolute bottom-[-1rem] right-2'>
          <button onClick={likeClicked}>
            <FcLike fontSize="1.75rem" className={likedFlag ? " opacity-100" : " opacity-20"} />
          </button>

        </div>

      </div>

      <div className='p-4'>
        <h2 className=' text-lg font-bold'>
          {course.title}
        </h2>
        <p>
          {
            course.description.length > 100 ? (course.description.substring(0, 100)) + "..." : (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card
import React from 'react'
import Card from './Card'

function CardContainer(props) {
    let courses = props.courses
    let category = props.category

    const getCourse = () => {
        if (category === "All") {
            let allCourses = []
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course)
                })
            })
            return allCourses;
        }
        else {
            // Main sirf selected category ka data pass karunga
            return courses[category]
        }

    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>

            {
                courses === null ? (
                    <div className=' text-3xl relative'>
                        <div className=' absolute top-12 select-none opacity-5 text-[50vw] m-auto font-extrabold'>
                            404
                        </div>
                        <div className='w-6/12 flex flex-col justify-center items-center 
                            space-y-8 mx-auto'>
                            <h2 className='font-extrabold'>
                                Nothing to see here
                            </h2>
                            <p className=' text-[1.2rem] text-center opacity-50'>
                                Page you are trying to open does not exist. 
                                You may have mistyped the address, or the page
                                has been moved to another URL. If you think 
                                this is an error contact support.
                            </p>
                        </div> 
                    </div>
                ) : (

                    getCourse().map((course) => {
                        return (
                            <Card key={course.id} course={course} />
                        )
                    })
                )
            }

            {/* {getCourse().map((course) => {
                return (
                    <Card key={course.id} course={course} />
                )
            })} */}
        </div>
    )
}

export default CardContainer
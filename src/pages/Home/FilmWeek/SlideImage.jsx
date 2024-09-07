import React, { useState } from "react"
import { ClockIcon, ImageIcon, PlayIcon } from "../../../images/icons" // Ensure path is correct
import { Link, useNavigate } from "react-router-dom"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
const SlideImage = ({ listFilms }) => {
  const getList = () =>
    listFilms.map((option, index) => (
      <SwiperSlide
        className='rounded-sm overflow-hidden select-none relative  h-full'
        key={option._id || index}
      >
        <div className=''>
          <div className='absolute duration-800 ease-in-out z-0 left-0 right-0 top-0 bottom-0 flex items-center justify-center text-6xl text-white bg-[rgba(0,0,0,0.3)]'></div>
          <img
            src={`https://phimimg.com/${option.poster_url}`}
            className='w-full max-h-[30rem]   object-cover'
            alt={option.name} // Providing meaningful alt text
            draggable={false}
          />
        </div>
        <div className='absolute w-1/2 left-10 text-white bottom-60 z-30'>
          <h2 className='lg:text-4xl font-medium my-4 leading-6 text-white'>{option.name}</h2>
          <div className='flex items-center mb-10 whitespace-nowrap'>
            <div className='flex items-center '>
              <p className='text-lg px-2 text-green-500'>{ClockIcon}</p>
              {option.time}
            </div>
            <div className='flex items-center '>
              <p className='text-lg px-2 text-green-500'>{ImageIcon}</p>
              {option.type}
            </div>
            <div className='px-2'>{option.origin_name}</div>
          </div>
          <Link
            to={`/phim/${option.slug}`}
            className=' text-white bg-gradient-to-r  from-red-500 outline-none whitespace-nowrap via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'
          >
            Xem Phim
          </Link>
        </div>
      </SwiperSlide>
    ))
  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} className='w-full '>
      {getList()}
    </Swiper>
  )
}

export default SlideImage

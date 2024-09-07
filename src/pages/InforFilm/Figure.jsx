import React from "react"
import { AvatarIcon } from "../../images/icons"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
const Figure = ({ listFilms }) => {
  return (
    <div className='bg-slate-800 p-4 rounded-sm shadow h-full'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
      >
        {listFilms.actor.map((option, index) => (
          <SwiperSlide
            className='text-center text-sm  text-white hover:cursor-pointer  '
            key={index}
          >
            <p className=' text-4xl my-4  max-lg:py-16  lg:py-16 text-white bg-black rounded-full h-full w-full flex items-center justify-center  '>
              {AvatarIcon}
            </p>
            {option}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Figure

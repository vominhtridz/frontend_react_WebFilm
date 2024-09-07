import React, { useEffect, useState } from "react" // Ensure path is correct
import { useNavigate } from "react-router-dom"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { PlayIcon } from "../../images/icons"
import { getRelatedFilm } from "../../apis/apis"
import { getRandomFloat } from "../../Components/Func"
const FilmRelated = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [relatedFilms, setRelatedFilms] = useState()
  const ramdom = Math.floor(getRandomFloat(1, 6))
  const Navigate = useNavigate()
  const handleMouseEnter = index => {
    setHoveredIndex(index)
  }
  useEffect(() => {
    getRelatedFilm(ramdom)
      .then(data => setRelatedFilms(data.data.items))
      .catch(err => console.log(err))
  }, [])
  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }
  const getList = () =>
    relatedFilms.map((option, index) => (
      <SwiperSlide
        className='rounded-md select-none hover:cursor-pointer h-full relative overflow-hidden'
        key={option._id}
        onClick={() => {
          Navigate(`/phim/${option.slug}`)
        }}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        {hoveredIndex === index && (
          <div className='absolute duration-800 ease-in-out left-0 right-0 top-0 bottom-0 flex items-center justify-center text-6xl text-white bg-[rgba(0,0,0,0.3)]'>
            {PlayIcon} {/* Ensure PlayIcon is a component and can be used here */}
          </div>
        )}
        <label className='absolute z-20 top-3 right-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md text-sm px-5 py-1 text-center'>
          {option.year}
        </label>
        <img
          src={option.poster_url}
          className='w-full  min-h-[310px] max-h-[310px]    shadow border border-gray-500  object-cover rounded-sm'
          alt={option.name} // Providing meaningful alt text
          draggable={false}
        />
        <p className='absolute bg-[rgba(0,0,0,0.5)] bottom-0 py-4 text-white text-center text-base leading-5 font-medium px-4 left-0 w-full overflow-hidden'>
          {option.name}
        </p>
      </SwiperSlide>
    ))

  return (
    <>
      <h2 className='lg:text-lg my-2 text-yellow-400 font-medium'> Có thể Bạn Thích Xem</h2>
      {relatedFilms && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={6}
          slidesPerView={5}
          navigation
          breakpoints={{
            376: {
              // width: 576,
              slidesPerView: 2,
            },
            576: {
              // width: 576,
              slidesPerView: 3,
            },
            768: {
              // width: 768,
              slidesPerView: 4,
            },

            1200: {
              // width: 768,
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
        >
          {getList()}
        </Swiper>
      )}
    </>
  )
}

export default FilmRelated

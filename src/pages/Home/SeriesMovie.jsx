import React, { useEffect, useState } from "react"
import { PlayIcon, RightIcon } from "../../images/icons"
import { Link, useNavigate } from "react-router-dom"
import { getCartoonFilm, getSeriesFilm } from "../../apis/apis"
const SeriesMovie = () => {
  const [listFilms, setListFilms] = useState([])
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const Navigate = useNavigate()
  const handleMouseEnter = index => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }
  useEffect(() => {
    const fetchFilms = async () => {
      getSeriesFilm()
        .then(data => setListFilms(data.data.data.items))
        .catch(err => console.log(err))
    }
    fetchFilms()
  }, [])

  const getList = () =>
    listFilms.map((option, index) => (
      <Link
        to={`/phim/${option.slug}`}
        className='p-1 max-h-1/2 w-1/5 max-lg:w-1/4 max-md:w-1/2 flex flex-col'
        key={option._id}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div className='relative'>
          <div className='absolute top-2 left-2 text-base font-medium  flex items-center rounded-full text-yellow-300 bg-[rbab(0,0,0,0.5)]'>
            {option.year}
          </div>
          <label
            htmlFor=''
            className='absolute select-none top-2 right-2 text-[12px] px-2 py-1 rounded-full text-sm text-white shadow bg-red-500 '
          >
            {option.episode_current}
          </label>
          {hoveredIndex === index && (
            <div className='absolute duration-800 ease-in-out left-0 right-0 top-0 bottom-0 flex items-center justify-center text-6xl text-white bg-[rgba(0,0,0,0.3)]'>
              {PlayIcon} {/* Ensure PlayIcon is a component and can be used here */}
            </div>
          )}

          <img
            src={`https://phimimg.com/${option.poster_url}`}
            alt={option.name}
            className='w-full  shadow border border-gray-500 min-h-[16rem] max-h-[16rem] object-cover rounded-sm'
          />
          <p className='absolute bottom-0 left-0 p-4 bg-[rgba(0,0,0,0.5)] font-medium text-center text-sm w-full  px-1 leading-5'>
            {option.name}
          </p>
        </div>
      </Link>
    ))
  return (
    <div className='my-10 overflow-hidden'>
      <div className='flex items-center justify-between'>
        <h2 className='text-yellow-400 block   py-1.5 text-xl font-semibold uppercase text-left'>
          Phim Bộ
        </h2>
        <Link
          to='/danh-sach/phim-bo'
          className='flex items-center text-[14px] text-white'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          Xem tất cả <p className='px-1 text-sm pt-0.5'>{RightIcon}</p>
        </Link>
      </div>
      <div className='flex flex-wrap   overflow-hidden  text-white'>{getList()}</div>
    </div>
  )
}

export default SeriesMovie

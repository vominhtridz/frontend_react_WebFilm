import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { LoadingIcon, PlayIcon } from "../../images/icons"
import { getListFilms, getListYear } from "../../apis/apis"
import PageNavigation from "./PageNavigation"
import NavigationYear from "./NavigationYear"
const ListFilmYear = () => {
  const location = useLocation()
  const [listFilms, setListFilms] = useState()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleMouseEnter = index => {
    setHoveredIndex(index)
  }
  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }
  useEffect(() => {
    getListYear(`/danh-sach/phim-moi-cap-nhat${location.search}`)
      .then(data => setListFilms(data.data))
      .catch(err => console.log(err))
  }, [location])
  const getList = () =>
    listFilms.items.map((option, index) => (
      <Link
        to={`/phim/${option.slug}`}
        className=' p-1 max-h-1/2 lg:w-1/5 md:1/6 flex flex-col'
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div className='relative'>
          {hoveredIndex === index && (
            <div className='absolute duration-800 ease-in-out left-0 right-0 top-0 bottom-0 flex items-center justify-center text-6xl text-white bg-[rgba(0,0,0,0.3)]'>
              {PlayIcon} {/* Ensure PlayIcon is a component and can be used here */}
            </div>
          )}
          <div className='absolute top-2 left-2 text-base font-medium  flex items-center rounded-full text-yellow-300 bg-[rbab(0,0,0,0.5)]'>
            {option.year}
          </div>
          <img
            src={`${option.poster_url}`}
            alt={option.name}
            className='w-full  shadow  border border-gray-500 lg:min-h-[16.2rem] object-cover rounded-sm'
          />
          <p className='absolute bottom-0 left-0 p-4 bg-[rgba(0,0,0,0.5)] font-medium text-center text-sm w-full  px-1 leading-5'>
            {option.name}
          </p>
        </div>
      </Link>
    ))

  return (
    <div className='w-full mr-4 '>
      <h2 className='text-xl font-semibold border-b border-gray-500 py-2 w-full flex items-center uppercase text-yellow-400'>
        Danh Sách {listFilms ? listFilms.titlePage : ""}
      </h2>

      {listFilms && (
        <div className=''>
          {!loading ? (
            <div className='flex flex-wrap mt-4  w-full overflow-hidden  text-white'>
              {getList()}
            </div>
          ) : (
            <div className='text-5xl flex lg:min-h-[30rem] items-center justify-center text-blue-500'>
              {LoadingIcon}
            </div>
          )}
          <NavigationYear setLoading={setLoading} listFilms={listFilms} />
        </div>
      )}
    </div>
  )
}

export default ListFilmYear

import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { LoadingIcon, PlayIcon } from "../../images/icons"
import { getListFilms, getListYear } from "../../apis/apis"
import PageNavigation from "./PageNavigation"
const ListFilm = () => {
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
    const fetchFilm = async () => {
      const path = location.search != "" ? location.pathname + location.search : location.pathname
      getListFilms(path)
        .then(data => setListFilms(data.data.data))
        .catch(err => console.log(err))
    }
    fetchFilm()
  }, [location])
  const getList = () =>
    listFilms.items.map((option, index) => (
      <Link
        to={`/phim/${option.slug}`}
        className='p-1  w-1/5 max-lg:w-1/5 max-md:w-1/4 max-sm:w-1/2 flex flex-col '
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div className='relative'>
          <label
            htmlFor=''
            className='absolute select-none top-2 right-2 text-[12px] px-2 py-1 rounded-full text-sm text-white shadow bg-red-500 '
          >
            {option.lang}
          </label>
          {hoveredIndex === index && (
            <div className='absolute duration-800 ease-in-out left-0 right-0 top-0 bottom-0 flex items-center justify-center text-6xl text-white bg-[rgba(0,0,0,0.3)]'>
              {PlayIcon} {/* Ensure PlayIcon is a component and can be used here */}
            </div>
          )}
          <div className='absolute top-2 left-2 text-base font-medium  flex items-center rounded-full text-yellow-300 bg-[rbab(0,0,0,0.5)]'>
            {option.year}
          </div>
          <img
            src={`https://phimimg.com/${option.poster_url}`}
            alt={option.name}
            className='w-full max-sm:min-h-[18rem]  shadow border border-gray-500 min-h-[16rem] max-h-[16rem] object-cover rounded-sm'
          />
          <p className='absolute bottom-0 left-0 p-4 bg-[rgba(0,0,0,0.5)] font-medium text-center text-sm w-full  px-1 leading-5'>
            {option.name}
          </p>
        </div>
      </Link>
    ))

  return (
    <div className='w-full lg:mr-4 '>
      <h2 className='text-xl font-semibold border-b border-gray-500 py-2 w-full flex items-center uppercase text-yellow-400'>
        Danh Sách {listFilms ? listFilms.titlePage : ""}
      </h2>

      {typeof listFilms === "object" ? (
        <div className=''>
          {!loading ? (
            <div className='flex flex-wrap mt-4 max-lg:p-2 w-full overflow-hidden  text-white'>
              {getList()}
            </div>
          ) : (
            <div className='text-5xl flex lg:min-h-[30rem] items-center justify-center text-blue-500'>
              {LoadingIcon}
            </div>
          )}
          <PageNavigation setLoading={setLoading} listFilms={listFilms} />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default ListFilm

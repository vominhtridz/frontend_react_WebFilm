import React, { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { SearchFilms } from "../../apis/apis"

import { PlayIcon } from "../../images/icons"
import PageNavigation from "../ListFilm/PageNavigation"
const Search = () => {
  const { keySearch } = useParams()
  const rerender = useLocation().pathname
  const path = useLocation().search == "" ? 1 : useLocation().search.split("?page=")[1]
  const [listFilms, setListFilms] = useState()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleMouseEnter = index => {
    setHoveredIndex(index)
  }
  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }
  // window.scrollTo(0, 0)
  useEffect(() => {
    const fetchFilm = async () => {
      SearchFilms(keySearch, 1000, path)
        .then(data => {
          setListFilms(data.data.data)
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
          }, 500)
        })
        .catch(err => console.log(err))
    }
    fetchFilm()
  }, [rerender])
  const getList = () =>
    listFilms.items.map((option, index) => (
      <Link
        to={`/phim/${option.slug}`}
        className='p-1  w-1/5 max-lg:w-1/5 max-md:w-1/4 max-sm:w-1/2 flex flex-col '
        key={option._id}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div className='relative'>
          <label
            htmlFor=''
            className='absolute select-none top-2 right-2 text-[12px] px-2 py-1 rounded-full text-sm text-white shadow bg-red-500 '
          >
            {option.quality ? option.quality : option.lang}
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
    <div className='w-full mr-4 '>
      {listFilms && (
        <div className=''>
          {listFilms.items.length > 0 ? (
            <div className=''>
              <h2 className='text-xl font-semibold border-b border-gray-500 py-2 w-full flex items-center uppercase text-yellow-400'>
                {listFilms.titlePage}
              </h2>
              <div className='hidden'>
                {listFilms.seoOnPage.descriptionHead} {listFilms.seoOnPage.titleHead}
                {listFilms.seoOnPage.og_url}
              </div>
              <div className='flex flex-wrap mt-4  w-full overflow-hidden  text-white'>
                {getList()}
              </div>
              <PageNavigation setLoading={loading} listFilms={listFilms} />
            </div>
          ) : (
            <div className=''>
              <div className='hidden'>
                {listFilms.seoOnPage.descriptionHead} {listFilms.seoOnPage.titleHead}
                {listFilms.seoOnPage.og_url}
              </div>
              <h2 className='text-xl font-semibold border-b border-gray-500 py-2 w-full flex items-center uppercase text-yellow-400'>
                {listFilms.titlePage}
              </h2>
              <div className='lg:text-3xl text-white font-medium flex items-center justify-center py-2'>
                Không Tìm Thấy Phim
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Search

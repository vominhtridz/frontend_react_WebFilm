import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { getFilms } from "../../apis/apis"
import { Link } from "react-router-dom"
import { PlayIcon } from "../../images/icons"
const FilmsFavorite = () => {
  const [Films, setFilms] = useState([])
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const username = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).Name
    : "Người dùng"
  const storageFilm = Cookies.get("Filmslove")
  useEffect(() => {
    const fetchFilms = async () => {
      const arrFilm = Cookies.get("Filmslove") ? JSON.parse(Cookies.get("Filmslove")) : []
      if (arrFilm.length > 0) {
        try {
          const filmsData = await Promise.all(
            arrFilm.map(path => getFilms("/" + path).then(data => data.data.movie)),
          )
          setFilms(filmsData)
        } catch (err) {
          console.log(err)
        }
      } else {
        setFilms([])
      }
    }

    fetchFilms()
  }, [storageFilm])

  const handleMouseEnter = index => setHoveredIndex(index)
  const handleMouseLeave = () => setHoveredIndex(null)
  const getListFilms = () =>
    Films.map((option, index) => (
      <div
        className='relative p-1 max-h-1/2 w-1/5 max-lg:w-1/4 max-md:w-1/2 flex flex-col'
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={() => handleRemoveFilm(`phim/${option.slug}`)}
          htmlFor=''
          className='absolute left-2 z-10 top-2 bg-red-600 text-white font-bold px-2.5 py-1 rounded-md'
        >
          X
        </button>
        <Link to={`/phim/${option.slug}`} className='text-white relative'>
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
            src={`${option.poster_url}`}
            alt={option.name}
            className='w-full  shadow border border-gray-500 min-h-[16rem] max-h-[16rem] object-cover rounded-sm'
          />
          <p className='absolute bottom-0 left-0 p-4 bg-[rgba(0,0,0,0.5)] font-medium text-center text-sm w-full  px-1 leading-5'>
            {option.name}
          </p>
        </Link>
      </div>
    ))
  const handleRemoveFilm = path => {
    const ListPathFilm = JSON.parse(Cookies.get("Filmslove"))
    const newPathFilms = ListPathFilm.filter(film => film !== path)
    Cookies.set("Filmslove", JSON.stringify(newPathFilms))
  }
  return (
    <div className='w-full bg-gray-600 p-6 min-h-[50vh] rounded-sm shadow '>
      <label className='text-white max-lg:text-base lg:text-2xl    bg-gradient-to-r max-lg:w-full from-green-600 outline-none whitespace-nowrap via-green-700 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg   px-5 py-1.5 text-left me-2 mb-2  '>
        Phim Yêu thích của {username}
      </label>
      {Films.length > 0 ? (
        <div className='py-4 flex flex-wrap'>{getListFilms()}</div>
      ) : (
        <h2 className='text-2xl text-center pt-14 text-white font-medium'>
          Bạn chưa có Phim yêu thích nào
        </h2>
      )}
    </div>
  )
}

export default FilmsFavorite

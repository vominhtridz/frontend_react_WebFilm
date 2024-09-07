import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PlayIcon } from "..//..//..//images/icons"
import { getSeriesFilm } from "../../../apis/apis"

const TopFilmSeries = () => {
  const [listFilms, setListFilms] = useState([])
  const [TopImage, setTopImage] = useState(false)
  const [IndexHover, setIndexHover] = useState(null)
  const handleMouseEnter = index => {
    setIndexHover(index)
  }
  const handleMouseLeave = () => {
    setIndexHover(null)
  }
  // fetch api
  useEffect(() => {
    const fetchFilm = async () => {
      getSeriesFilm()
        .then(data => {
          setListFilms(data.data.data.items)
        })
        .catch(err => console.log(err))
    }
    fetchFilm()
  }, [])

  const getList = () =>
    // get list Film for side bar
    listFilms.map((option, index) => (
      <Link
        className='flex text-white  relative w-full p-1 my-2 h-[6rem] rounded-sm shadow'
        to={`/phim/${option.slug}`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        key={index}
      >
        <img
          src={`https://phimimg.com/${option.poster_url}`}
          alt=''
          className='w-1/3 object-cover shadow border border-gray-600 rounded-sm'
        />
        {IndexHover == index && (
          <div className='absolute duration-800 ease-in-out left-0 top-0 w-1/3 bottom-0 flex items-center justify-center text-6xl text-white bg-[rgba(0,0,0,0.3)]'>
            {PlayIcon} {/* Ensure PlayIcon is a component and can be used here */}
          </div>
        )}

        <div className='mx-4 left-2 bottom-0'>
          <p className='whitespace-nowrap font-semibold text-[15px] w-[8.5rem] text-ellipsis overflow-hidden leading-6 hover:text-yellow-400'>
            {option.name}
          </p>
          <p className='whitespace-nowrap text-white'>{option.lang}</p>
          <p className='whitespace-nowrap text-white '>{option.time}</p>
        </div>
        <div className='absolute top-4 right-4 text-sm mr-2 text-yellow-400 flex items-center'>
          {option.year}
        </div>
        <div className='absolute top-12 right-4 bg-red-500 text-sm mr-2 text-white px-3.5 py-0.5 rounded-full flex items-center'>
          {option.quality}
        </div>
      </Link>
    ))
  return (
    <>
      <h2 className='text-xl text-yellow-400 uppercase font-semibold'> Phim Bộ Hay</h2>
      <div className='block my-2 bg-gray-900'>
        {listFilms.length > 8 && (
          <Link
            className='flex text-white  relative w-full p-2  h-[10rem] rounded-sm shadow'
            to={`/phim/${listFilms[9].slug}`}
            onMouseEnter={() => setTopImage(true)}
            onMouseLeave={() => setTopImage(false)}
          >
            <img
              src={`https://phimimg.com/${listFilms[9].poster_url}`}
              alt=''
              className='w-full h-full shadow border border-gray-700  hover:opacity-80 object-cover rounded-sm'
            />
            {TopImage && (
              <div className='absolute duration-800 ease-in-out left-0 right-0 top-0 bottom-0 flex items-center justify-center text-6xl text-white bg-[rgba(0,0,0,0.3)]'>
                {PlayIcon} {/* Ensure PlayIcon is a component and can be used here */}
              </div>
            )}
            <div className='mx-4 absolute left-1 bottom-6'>
              <p className='whitespace-nowrap font-semibold text-[15px] w-[8.5rem] text-ellipsis overflow-hidden leading-6 hover:text-yellow-400'>
                {listFilms[9].name}
              </p>
              <p className='whitespace-nowrap text-white'>{listFilms[9].time}</p>
            </div>
            <p className=' absolute bottom-8 right-4'>{listFilms[9].year}</p>

            <div className='absolute top-4 right-4 text-base mr-2 text-white  flex items-center'>
              {listFilms[9].lang}
            </div>
            <div className='absolute top-12 right-4 bg-red-500 text-sm mr-2 text-white px-3.5 py-0.5 rounded-full flex items-center'>
              {listFilms[9].quality}
            </div>
          </Link>
        )}
        {getList()}
      </div>
    </>
  )
}

export default TopFilmSeries

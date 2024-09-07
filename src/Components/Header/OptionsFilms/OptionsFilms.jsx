import React, { useState } from "react"
import { DownIcon } from "../../../images/icons"
import { Link } from "react-router-dom"
import { nationals, Categories, listFilmsOp, ListYear } from "../index"

const OptionsFilms = ({ setIsBar }) => {
  const [showCategory, setShowCategory] = useState(false)
  const [showNational, setShowNational] = useState(false)
  const [showFilm, setShowFilm] = useState(false)
  const getNationals = nationals.map((option, index) => (
    <Link
      to={`/quoc-gia/${option.path}`}
      className='text-[12.5px]  text-slate-600 hover:text-[13px]   max-lg:w-full max-md:text-left  hover:text-slate-500 whitespace-nowrap lg:w-1/3 text-left py-1  px-2'
      key={index}
      onClick={() => {
        setIsBar(false)
        window.scrollTo(0, 0)
      }}
    >
      {option.title}
    </Link>
  ))
  const getCategory = Categories.map((option, index) => (
    <Link
      to={`/the-loai/${option.path}`}
      className=' text-[12.5px]  text-slate-600 hover:text-[13px]   max-lg:w-full max-md:text-left  hover:text-slate-500 whitespace-nowrap lg:w-1/3 text-left py-1  px-2'
      key={index}
      onClick={() => {
        setIsBar(false)
        window.scrollTo(0, 0)
      }}
    >
      {option.title}
    </Link>
  ))
  const getListFilm = listFilmsOp.map((option, index) => (
    <Link
      to={option.path}
      className=' text-[12.5px]  text-slate-600 hover:text-[13px]   max-md:w-full max-md:text-left hover:text-slate-500 whitespace-nowrap md:w-1/2 text-left py-1  px-2'
      key={index}
      onClick={() => {
        setIsBar(false)
        window.scrollTo(0, 0)
      }}
    >
      {option.title}
    </Link>
  ))
  const ShowCate = () => {
    setShowNational(false)
    setShowFilm(false)
    setShowCategory(!showCategory)
  }
  const ShowFilm = () => {
    setShowNational(false)
    setShowFilm(!showFilm)
    setShowCategory(false)
  }
  const ShowNation = () => {
    setShowNational(!showNational)
    setShowFilm(false)
    setShowCategory(false)
  }
  return (
    <div className='flex text-base items-center  max-lg:flex-col lg:text-white'>
      <button
        className='flex max-lg:flex-col lg:items-center max-lg:w-full max-lg:py-2 duration-700 outline-none ease-in-out px-2.5 w-full text-[13px] whitespace-nowrap uppercase relative'
        onClick={ShowFilm}
        onMouseEnter={() => {
          setShowNational(false)
          setShowFilm(true)
          setShowCategory(false)
        }}
        onMouseLeave={() => {
          setShowNational(false)
          setShowFilm(false)
          setShowCategory(false)
        }}
      >
        <div className='flex max-lg:w-full  items-center'>
          Danh Sách Phim <p className='text-[11px] max-md:py-2  px-3 ml-auto'>{DownIcon}</p>
        </div>
        {showFilm && (
          <div className='p-1 max-lg:w-full max-lg:flex-col uppercase lg:min-w-[15rem] max-h-[15rem]  duration-700 ease-in-out  lg:absolute  left-0  flex items-center max-lg:py-2 flex-wrap top-full z-50 rounded-sm shadow border bg-white text-black border-gray-200'>
            {getListFilm}
          </div>
        )}
      </button>
      <button
        className='flex max-lg:flex-col lg:items-center max-lg:w-full max-lg:py-2 duration-700 outline-none ease-in-out px-2.5 w-full text-[13px] whitespace-nowrap uppercase relative'
        onClick={ShowCate}
        onMouseEnter={() => {
          setShowNational(false)
          setShowFilm(false)
          setShowCategory(true)
        }}
        onMouseLeave={() => {
          setShowNational(false)
          setShowFilm(false)
          setShowCategory(false)
        }}
      >
        <div className='flex max-lg:w-full items-center'>
          Thể loại <p className='text-[11px] max-md:py-2  px-3 ml-auto'>{DownIcon}</p>
        </div>
        {showCategory && (
          <div className='p-1 max-lg:w-full max-lg:flex-row  max-md:w-full  uppercase lg:min-w-[20rem] max-h-[20rem] overflow-y-scroll duration-700 ease-in-out  lg:absolute  left-0  flex items-center flex-wrap top-full z-50 rounded-sm shadow border bg-white text-black border-gray-200'>
            {getCategory}
          </div>
        )}
      </button>
      <button
        className='flex max-lg:flex-col lg:items-center max-lg:w-full w-full px-2.5 text-[13px] whitespace-nowrap uppercase relative'
        onClick={ShowNation}
        onMouseEnter={() => {
          setShowNational(true)
          setShowFilm(false)
          setShowCategory(false)
        }}
        onMouseLeave={() => {
          setShowNational(false)
          setShowFilm(false)
          setShowCategory(false)
        }}
      >
        <div className='flex max-lg:w-full  items-center'>
          Quốc gia <p className='text-[11px] max-md:py-2  px-3 ml-auto'>{DownIcon}</p>
        </div>
        {showNational && (
          <div className='p-1 max-lg:w-full max-lg:flex-row  max-md:w-full  uppercase lg:min-w-[20rem] max-h-[20rem] overflow-y-scroll duration-700 ease-in-out  lg:absolute  left-0  flex items-center flex-wrap top-full z-50 rounded-sm shadow border bg-white text-black border-gray-200'>
            {getNationals}
          </div>
        )}
      </button>
    </div>
  )
}

export default OptionsFilms

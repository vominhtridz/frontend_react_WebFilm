import React from "react"
import { PlayIcon } from "../../../images/icons"
import { Link, useLocation } from "react-router-dom"
import RightBar from "./RightBar"
const AllInforFilm = ({ listFilms }) => {
  const path = useLocation().pathname
  const ListEsopide = !parseInt(listFilms.movie.episode_current.slice(4, 10))
    ? parseInt(listFilms.movie.episode_total)
    : parseInt(listFilms.movie.episode_current.slice(4, 10))
  return (
    <div className='bg-slate-800 p-4 flex shadow'>
      <div className='mr-4'>
        <div className='flex  text-sm text-slate-300 py-1'>
          <div className='px-2 font-medium  text-white flex items-center '>
            <div className=' px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Tập phim:
          </div>
          <div className='mt-2.5'>
            {listFilms.movie.episode_total > 1 ? (
              Array.from({ length: 3 }, (_, index) => (
                <Link
                  key={index}
                  to={`${path}/tap-${ListEsopide - index < 10 ? 0 : ""}${ListEsopide - index}`}
                  className='text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800  rounded-md text-sm px-4 font-sans py-[5px] text-center me-2 mb-2'
                >
                  {ListEsopide - index}
                </Link>
              ))
            ) : (
              <Link
                to={`/phim/${listFilms.movie.slug}/full`}
                className='block text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800  rounded-md text-sm px-4 font-sans py-[5px] text-center me-2 mb-2'
              >
                Xem Phim
              </Link>
            )}
          </div>
        </div>
        <div className='flex items-center text-sm text-slate-300 py-1'>
          <div className='px-2 font-medium  text-white flex items-center '>
            <div className=' px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Tên Phim :
          </div>
          {listFilms.movie.name}
        </div>
        <div className='flex items-center text-sm text-slate-300 py-1'>
          <div className='px-2 font-medium  text-white flex items-center '>
            <div className='px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Trạng Thái :
          </div>
          {listFilms.movie.status}
        </div>
        <div className='flex items-center text-sm text-slate-300 py-1'>
          <div className='px-2 font-medium  text-white flex items-center '>
            <div className='px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Thể Loại :
          </div>
          {listFilms.movie.category[0].name}
        </div>
        <div className='flex items-center text-sm text-slate-300 py-1'>
          <div className='px-2 font-medium  text-white flex items-center '>
            <div className='px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Quốc gia :
          </div>
          {listFilms.movie.country[0].name}
        </div>
        <div className='flex items-center text-sm text-slate-300 py-1'>
          <div className='px-2 font-medium  text-white flex items-center '>
            <div className='px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Số lượng thích
          </div>
          123
        </div>
      </div>
      <RightBar listFilms={listFilms} />
    </div>
  )
}

export default AllInforFilm

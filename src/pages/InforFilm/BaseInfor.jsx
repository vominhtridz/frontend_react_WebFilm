import React from "react"
import { ClockIcon, PlayIcon, StarIcon } from "../../images/icons"
import { Link, useLocation } from "react-router-dom"

const BaseInfor = ({ listFilms }) => {
  const pathSplit = useLocation().pathname.split("/")
  const variEpisode =
    listFilms.episodes[0].server_data.length == 1
      ? "full"
      : parseInt(listFilms.movie.episode_total) > 99
        ? "tap-001"
        : "tap-01"
  return (
    <>
      (
      <div className='w-full  lg:max-h-[22rem] max-lg:min-h-[30rem]  lg:min-h-[22rem] rounded-md overflow-hidden relative'>
        <img
          src={listFilms.movie.thumb_url ? listFilms.movie.thumb_url : listFilms.movie.link_m3u8}
          className='absolute  top-0 left-0 right-0 opacity-40 bottom-0 z-0 w-full object-cover h-full select-none'
          alt=''
        />

        <div className='lg:absolute   max-lg:p-2 flex max-lg:flex-col max-lg:w-full max-lg:items-center    lg:top-1/2 lg:-translate-y-1/2 left-6 lg:h-[15.5rem]'>
          <h2 className='text-ellipsis z-30 p-4 text-yellow-300  lg:hidden max-lg:leading-6 max-lg:text-xl  lg:text-xl font-medium lg:whitespace-nowrap w-full'>
            {listFilms.movie.name}
          </h2>
          {pathSplit[3] == undefined && listFilms.movie.episode_current != "Trailer" ? (
            <Link
              to={`/phim/${listFilms.movie.slug}/${variEpisode}`}
              className='relative hover:opacity-80 max-lg:py-2 rounded-sm overflow-hidden'
            >
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white'>
                {PlayIcon}
              </div>

              <img
                src={listFilms.movie.poster_url}
                alt=''
                className='w-[11.5rem] object-cover h-full '
              />

              <div className='absolute bottom-0 bg-[#E02424] text-white w-full flex justify-center py-2 text-sm uppercase'>
                Xem phim
              </div>
            </Link>
          ) : (
            <img
              src={listFilms.movie.poster_url}
              alt=''
              className='w-[11.5rem] object-cover  relative hover:opacity-80 rounded-sm overflow-hidden h-full '
            />
          )}
          <div className='lg:w-[40rem] max-lg:w-full lg:mx-6 max-lg:ml-2'>
            <h2 className='text-ellipsis max-lg:hidden  max-lg:text-base  lg:text-xl font-medium lg:whitespace-nowrap w-full text-yellow-300 '>
              {listFilms.movie.name}
            </h2>

            <div className='py-1 max-lg:w-full max-lg:text-white lg:text-slate-50 leading-4 max-lg:font-sans max-lg:text-[11px] font-medium text-sm  border-b border-gray-600'>
              {listFilms.movie.content}
            </div>
            <div className='my-2 flex max-lg:flex-col  lg:items-center justify-between'>
              <div className=''>
                <div className='flex items-center'>
                  <div className='text-lg text-yellow-400 hover:text-yellow-500'>{StarIcon}</div>
                  <div className='text-lg text-yellow-400 hover:text-yellow-500'>{StarIcon}</div>
                  <div className='text-lg text-yellow-400 hover:text-yellow-500'>{StarIcon}</div>
                  <div className='text-lg text-yellow-400 hover:text-yellow-500'>{StarIcon}</div>
                  <div className='text-lg text-yellow-400 hover:text-yellow-500'>{StarIcon}</div>
                </div>
                <div className='text-white text-[12px]'>Đánh giá 8 sao </div>
              </div>
              <div className='flex'>
                <div className='flex font-semibold text-white items-center'>
                  <div className='px-1 text-green-400 text-sm'>Tập</div>
                  <div className=''>{listFilms.movie.episode_current}</div>
                </div>
                <div className='font-semibold text-white flex items-center px-4'>
                  <div className='px-1  text-green-400 text-sm'>Năm</div> {listFilms.movie.year}
                </div>
                <div className='flex font-semibold text-white items-center'>
                  <div className='px-2 text-lg text-green-400'>{ClockIcon}</div>
                  {listFilms.movie.time}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  )
}

export default BaseInfor

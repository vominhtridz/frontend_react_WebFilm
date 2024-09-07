import React from "react"
import { PlayIcon } from "../../../images/icons"

const RightBar = ({ listFilms }) => {
  return (
    <div className='mx-4'>
      <div className='flex items-center text-sm text-slate-300 py-1'>
        <div className='px-2 font-medium  text-white flex items-center '>
          <div className='px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Số tập :
        </div>
        {listFilms.movie.episode_current}
      </div>
      <div className='flex items-center text-sm text-slate-300 py-1'>
        <div className='px-2 font-medium  text-white flex items-center '>
          <div className='px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Chất Lượng :
        </div>
        <label htmlFor='' className='bg-red-500 px-2 rounded-full py-1 mx-2 text-white text-[11] '>
          {listFilms.movie.quality}
        </label>
      </div>
      <div className='flex items-center text-sm text-slate-300 py-1'>
        <div className='px-2 font-medium  text-white flex items-center '>
          <div className='px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Ngôn Ngữ :
        </div>
        {listFilms.movie.lang}
      </div>
      <div className='flex items-center text-sm text-slate-300 py-1'>
        <div className='px-2 font-medium  text-white flex items-center '>
          <div className='px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Năm:
        </div>
        {listFilms.movie.year}
      </div>
      <div className='flex items-center text-sm text-slate-300 py-1'>
        <div className='px-2 font-medium  text-white flex items-center '>
          <div className='px-1.5 text-[12px] text-yellow-400'>{PlayIcon}</div> Thời lượng :
        </div>
        {listFilms.movie.time}
      </div>
    </div>
  )
}

export default RightBar

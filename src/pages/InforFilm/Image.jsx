import React from "react"
import img from "..//..//images/download.jfif"
const Image = ({ listFilms }) => {
  return (
    <div className='bg-slate-800  rounded-sm w-full p-4 h-[30rem] overflow-hidden shadow'>
      <img
        src={listFilms.movie.thumb_url}
        alt=''
        className='w-full h-full  rounded-md object-cover overflow-hidden'
      />
    </div>
  )
}

export default Image

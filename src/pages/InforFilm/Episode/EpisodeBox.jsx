import React from "react"
import { MicroIcon } from "../../../images/icons"
import { Link, useLocation } from "react-router-dom"

const EpisodeBox = ({ Episodes }) => {
  const path = useLocation().pathname.split("/")
  return (
    <div className=''>
      <div className='flex items-center text-gray-300 font-medium'>
        <p className='px-2 text-xl text-gray-400'>{MicroIcon}</p> Phim Hay
      </div>
      <div className='p-4 my-2 flex flex-wrap bg-slate-900 rounded-sm '>
        {Episodes.episodes[0].server_data.map((option, index) => (
          <Link
            to={`/${path[1]}/${path[2]}/${option.slug}`}
            key={index}
            onClick={() => {
              window.scrollTo(0, 0)
            }}
            className={`text-white flex items-center justify-center ${option.slug == path[3] ? "bg-red-500" : "bg-gray-500"}  font-medium rounded-sm text-sm w-10 h-8 mx-1 my-1.5 text-center hover:bg-red-500`}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EpisodeBox

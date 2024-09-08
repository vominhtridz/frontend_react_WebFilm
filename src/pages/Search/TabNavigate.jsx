import React from "react"
import { Link } from "react-router-dom"
const TabNavigate = ({ listFilms }) => {
  return (
    <div className='flex  max-lg:overflow-x-auto  text-sm uppercase  w-full items-center text-white bg-black p-2 rounded-sm'>
      <Link to={`/`}>Trang chủ</Link>
      <p className='px-1'>/</p>
      {listFilms.movie.category.map((item, index) => (
        <div className='flex' key={index}>
          <Link to={`/the-loai/${item.slug}`}>{item.name}</Link>
          <p className='px-1'>/</p>
        </div>
      ))}
      <Link to={`/phim/${listFilms.movie.slug}`}>{listFilms.movie.name}</Link>
    </div>
  )
}

export default TabNavigate

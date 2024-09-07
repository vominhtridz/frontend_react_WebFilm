import React, { useEffect, useState } from "react"
import { getFilmNomiNations } from "../../../apis/apis"
import SlideImage from "./SlideImage"
const Recommend = () => {
  const [listFilms, setListFilms] = useState([])
  useEffect(() => {
    getFilmNomiNations()
      .then(data => setListFilms(data.data.items))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='relative mx-auto max-md:w-full lg:w-[1200px] max:md:w-full  my-6 p-2'>
      <h2 className='text-yellow-400 py-1.5 text-xl font-semibold uppercase text-left'>
        Phim Đề Xuất
      </h2>
      <SlideImage listFilms={listFilms} />
    </div>
  )
}

export default Recommend

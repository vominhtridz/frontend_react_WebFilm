import React, { useEffect, useState } from "react"
import { getCartoonFilm } from "../../../apis/apis"
import SlideImage from "./SlideImage"
const FilmWeek = () => {
  const [listFilms, setListFilms] = useState([])
  useEffect(() => {
    const fetchFilms = async () => {
      getCartoonFilm()
        .then(data => setListFilms(data.data.data.items))
        .catch(err => console.log(err))
    }
    fetchFilms()
  }, [])
  return (
    <div className='w-full  overflow-hidden'>
      <SlideImage listFilms={listFilms} />
    </div>
  )
}

export default FilmWeek

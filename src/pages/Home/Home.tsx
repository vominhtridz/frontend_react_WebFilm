import React, { useEffect, useState } from "react"
import FilmWeek from "./FilmWeek/FilmWeek"
import MovieFilm from "./CartoonFilm"
import SeriesMovie from "./SeriesMovie"
import SingleMovie from "./SingleMovie"
import TVShows from "./TVShows"

const Home = () => {
  return (
    <>
      <div className='mx-auto w-full pl-2 pr-2'>
        {/* <FilmWeek /> */}
        <MovieFilm />
        <SeriesMovie />
        <SingleMovie />
        <TVShows />
      </div>
    </>
  )
}

export default Home

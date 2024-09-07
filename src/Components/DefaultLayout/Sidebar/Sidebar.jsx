import React from "react"
import WeekFilm from "./WeekFilm"
import TopFilmSeries from "./TopFilmSeries"

const Sidebar = () => {
  return (
    <div className='w-[25%] ml-2 max-lg:hidden'>
      <WeekFilm />
      <TopFilmSeries />
    </div>
  )
}

export default Sidebar

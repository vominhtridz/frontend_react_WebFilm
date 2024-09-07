import React, { useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Advertisement from "./Advertisement"
import Sidebar from "./Sidebar/Sidebar"
import { Outlet, useLocation } from "react-router-dom"
import FilterFilm from "..//..//pages/Search/FilterFilm"
import Recommend from "..//..//pages/Home/Recommend/Recommend"
import { useMyContext } from "../../context/context"
import CustomLabel from "../Label/CustomLabel"
const DefaultLayout = () => {
  const { VisibMessLabel, MessLabel, Auth } = useMyContext()
  const path = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path.pathname])
  return (
    <div className='w-full h-full min-h-[100vh] bg-gray-50 dark:bg-gray-700'>
      <Header />
      <div>
        {/* IF PATH CURRENT NOT PAGE HOME RENDER ANOTHER OPTION LIKE FILTER FILM  */}
        {path.pathname == "/" ? (
          <Recommend />
        ) : (
          <div className='flex body w-full justify-center mt-[20px]'>
            <div className='lg:w-[1200px]'>
              <Advertisement />
              {path.pathname.split("/")[2] == "search" && <FilterFilm />}
            </div>
          </div>
        )}
        <div className={`flex  w-full justify-center  `}>
          <div className='lg:w-[1200px] max-lg:w-full flex justify-between'>
            <div className='lg:w-[75%] max-lg:w-full'>
              <Outlet />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      {VisibMessLabel && <CustomLabel obj={MessLabel} />}
      <Footer />
    </div>
  )
}

export default DefaultLayout

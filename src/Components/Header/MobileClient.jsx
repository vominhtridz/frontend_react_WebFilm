import React from "react"
import { IconWeb, MenuIcon } from "../../images/icons"
import FeedBack from "./FeedBack"
import OptionsFilms from "./OptionsFilms/OptionsFilms"
import { Link } from "react-router-dom"
import Account from "./Account/Account"

const MobileClient = ({ isbar, setIsBar, ShowBar }) => {
  return (
    <div className='my-auto'>
      {isbar && (
        <div className='lg:hidden  z-50 bg-[rgba(0,0,0,0.5)] fixed left-0 right-0 top-0 bottom-0'>
          <div className='flex flex-col px-1 py-2 text-black bg-white w-[15rem] h-full absolute left-0 top-0 bottom-0'>
            <Link
              to='/'
              className='flex outline-none items-center mx-auto pb-2  text-base  text-white '
            >
              <p className='text-5xl'>{IconWeb}</p>
            </Link>
            <OptionsFilms setIsBar={setIsBar} />
            <FeedBack setIsBar={setIsBar} />
            <Account setIsBar={setIsBar} />
          </div>
          <button
            className='text-2xl right-4 top-2 absolute text-white font-medium'
            onClick={() => setIsBar(false)}
          >
            X
          </button>
        </div>
      )}
      <button
        onClick={ShowBar}
        className='p-4 ml-6 text-black lg:hidden active:bg-slate-400 active:text-base duration-200 ease-in-out active:p-4.5 bg-slate-300 my-auto rounded-full  flex items-center justify-center'
      >
        {MenuIcon}
      </button>
    </div>
  )
}

export default MobileClient

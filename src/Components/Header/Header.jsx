import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IconWeb } from "..//..//images/icons"
import OptionsFilms from "./OptionsFilms/OptionsFilms"
import Search from "./Search/Search"
import Account from "./Account/Account"
import FeedBack from "./FeedBack"
import MobileClient from "./MobileClient"
import Cookies from "js-cookie"
import AccountLoged from "./Account/AccountLoged"
const Header = () => {
  const [isbar, setIsBar] = useState(false)
  const ShowBar = () => setIsBar(true)
  const token = Cookies.get("logged" || "uid")
  useEffect(() => {}, [Cookies])
  return (
    <div className=' header lg:px-20 max-lg:px-4 flex  max-lg:justify-between w-full lg:justify-center'>
      <div className='lg:w-[1200px] flex justify-between max-lg:w-full'>
        <Link to='/' className='flex outline-none items-center  pb-3 text-base px-4 text-white '>
          <p className='text-5xl'>{IconWeb}</p>
        </Link>
        <div className='max-lg:w-full  max-lg:hidden  flex items-center'>
          <OptionsFilms setIsBar={setIsBar} />
        </div>
        <Search />

        <div className='max-lg:hidden flex items-center my-auto'>
          {token ? <AccountLoged /> : <Account setIsBar={setIsBar} />}
        </div>
        {/* <FeedBack setIsBar={setIsBar} /> */}
        {/* mobile */}
        <MobileClient ShowBar={ShowBar} setIsBar={setIsBar} isbar={isbar} />
      </div>
    </div>
  )
}

export default Header

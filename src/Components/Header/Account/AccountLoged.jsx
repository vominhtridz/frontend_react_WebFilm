import React, { useState } from "react"
import { Link } from "react-router-dom"
import defaultImg from "..//..//..//images/userImg.png"
import {
  ArrowDown,
  ArrowUp,
  CheckIcon,
  ErrorIcon,
  HeartIcon,
  HistoryIcon,
  OffIcon,
  UserIcon,
} from "../../../images/icons"
import Cookies from "js-cookie"
import { AxiosPrivate } from "../../../apis/ServerApi"
import { handleLabel } from "../../Func"
import { useMyContext } from "../../../context/context"
const AccountLoged = () => {
  const [isOption, setIsOption] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { setVisibMessLabel, setMessLabel } = useMyContext()
  const [img, setImg] = useState(() => {
    const local = JSON.parse(localStorage.getItem("user"))
    return local ? local.image : defaultImg
  })
  const handleLogout = () => {
    AxiosPrivate.post("/user/logout")
      .then(res => {
        const mess = res.data.Message ? res.data.Message : "Đăng Xuất thành công!"
        handleLabel(
          { title: mess, icon: CheckIcon, color: "bg-green-500" },
          1500,
          setVisibMessLabel,
          setMessLabel,
        )
        //clear cookie
        ClearCookie()
      })
      .catch(err => {
        console.log(err)
        const mess = err.response.data.Message ? err.response.data.Message : "Đăng Xuất Thất bại!"
        handleLabel(
          { title: mess, icon: ErrorIcon, color: "bg-red-500" },
          1600,
          setVisibMessLabel,
          setMessLabel,
        )
      })
  }

  const ClearCookie = () => {
    Cookies.remove("token")
    Cookies.remove("uid")
    Cookies.remove("jwt")
    Cookies.remove("roles")
    Cookies.remove("logged")
    localStorage.removeItem("user")
  }
  return (
    <div
      className='relative'
      onMouseEnter={() => {
        setIsOption(true)
        setIsOpen(true)
      }}
      onMouseLeave={() => {
        setIsOption(false)
        setIsOpen(false)
      }}
    >
      <div className='flex items-center '>
        <img
          onClick={() => {
            setIsOption(!isOption)
            setIsOpen(!isOpen)
          }}
          id='avatarButton'
          type='button'
          data-dropdown-toggle='userDropdown'
          data-dropdown-placement='bottom-start'
          className='w-14 h-10 rounded-full object-cover  cursor-pointer'
          src={img}
          alt='User dropdown'
        />
        <p className='ease-in-out duration-800 text-white text-base pl-2'>
          {isOpen ? ArrowUp : ArrowDown}
        </p>
      </div>

      {isOption && (
        <div
          id='userDropdown'
          className='z-10 py-2 absolute right-[-14px] overflow-hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
        >
          <ul className=' text-sm  text-gray-700 dark:text-gray-200' aria-labelledby='avatarButton'>
            <Link
              to='/user/infor'
              className=' text-left flex items-center whitespace-nowrap  py-2 hover:bg-gray-100 text-gray-400 font-medium dark:hover:bg-gray-600 dark:hover:text-white'
            >
              <p className='px-2 p-0 text-lg'>{UserIcon}</p>
              Thông tin tài khoản
            </Link>
            <Link
              to='/user/history'
              className='text-left flex items-center whitespace-nowrap  py-2 hover:bg-gray-100 text-gray-400 font-medium dark:hover:bg-gray-600 dark:hover:text-white'
            >
              <p className='px-2 p-0 text-lg'>{HistoryIcon}</p>
              Lịch sử xem
            </Link>
            <Link
              to='/user/favorite'
              className='text-left flex items-center whitespace-nowrap  py-2 hover:bg-gray-100 text-gray-400 font-medium dark:hover:bg-gray-600 dark:hover:text-white'
            >
              <p className='px-2 p-0 text-lg'>{HeartIcon}</p>
              Phim Yêu thích
            </Link>
          </ul>
          <button
            onClick={handleLogout}
            className='text-left w-full  flex items-center whitespace-nowrap  py-2 hover:bg-gray-100 text-gray-400 font-medium dark:hover:bg-gray-600 dark:hover:text-white'
          >
            <p className='px-2.5 p-0 text-sm'>{OffIcon}</p>
            Đăng Xuất
          </button>
        </div>
      )}
    </div>
  )
}

export default AccountLoged

import React from "react"
import { Link } from "react-router-dom"

const Account = ({ setIsBar }) => {
  return (
    <div className='ml-auto pt-1.5 max-lg:w-full'>
      <Link
        to='/login'
        className='text-white block bg-gradient-to-r max-lg:w-full from-blue-500 outline-none whitespace-nowrap via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2 '
        onClick={() => setIsBar(fasle)}
      >
        Đăng Nhập
      </Link>
    </div>
  )
}

export default Account

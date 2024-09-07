import React from "react"
import { Link } from "react-router-dom"

const FeedBack = ({ setIsBar }) => {
  return (
    <Link
      to='/feedback'
      className=' max-lg:mt-4 max-lg:w-full ml-auto lg:my-auto  text-white bg-gradient-to-r from-red-500 outline-none whitespace-nowrap via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-1.5 text-center '
      onClick={() => setIsBar(false)}
    >
      Phản hồi lỗi
    </Link>
  )
}

export default FeedBack

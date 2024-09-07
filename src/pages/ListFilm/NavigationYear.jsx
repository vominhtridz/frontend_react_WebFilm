import React, { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const NavigationYear = ({ setLoading, listFilms }) => {
  const navigate = useNavigate()
  const location = useLocation()
  // Convert pageid to a number or default to 1 if not found
  const pageid = Number(new URLSearchParams(location.search).get("page")) || 1
  const [pageCount, setPageCount] = useState([])
  useEffect(() => {
    // Update pageCount whenever pageid or listFilms changes
    const startPage = Math.max(pageid - 4, 1) // Show 10 pages including the current one
    const endPage = Math.min(startPage + 9, listFilms.pagination.totalPages)
    setPageCount(Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index))
  }, [pageid, listFilms])

  const handleLastPage = () => {
    const lastPage = listFilms.pagination.totalPages
    if (lastPage === pageid) return
    navigate(`${location.pathname}?page=${lastPage}`)
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  const handleFirstPage = () => {
    if (listFilms.pagination.currentPage === 1) return
    navigate(`${location.pathname}?page=1`)
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  const handleClickPage = number => {
    navigate(`${location.pathname}?page=${number}`)
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className='w-full'>
      <div className='flex items-center my-4 whitespace-nowrap justify-center'>
        <button
          onClick={handleFirstPage}
          className={`${listFilms.pagination.currentPage === 1 ? "" : "hover:bg-green-500 hover:shadow hover:border-green-700 border border-slate-700"} text-white outline-none px-4 py-2 rounded-sm font-medium lg:text-base bg-slate-800`}
        >
          Trang Đầu
        </button>
        <div className='flex items-center overflow-hidden'>
          {pageCount.map(number => (
            <Link
              to={`${location.pathname}?page=${number}`}
              className={`${listFilms.pagination.currentPage === number ? "bg-red-500 text-white" : "bg-slate-800"} text-white outline-none px-4 py-2 rounded-sm font-medium lg:text-base  hover:bg-green-500 hover:shadow hover:border-green-700 border border-slate-700`}
              key={number}
              onClick={() => handleClickPage(number)}
            >
              {number}
            </Link>
          ))}
        </div>
        <button
          onClick={handleLastPage}
          className={`${listFilms.pagination.totalPages === pageid ? "" : "hover:bg-green-500 hover:shadow hover:border-green-700 border border-slate-700"} text-white outline-none px-4 py-2 rounded-sm font-medium lg:text-base bg-slate-800`}
        >
          Trang Cuối
        </button>
      </div>
    </div>
  )
}

export default NavigationYear

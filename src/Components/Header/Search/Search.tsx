import React, { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import SearchIcon from "./SearchIcon"
const Search = () => {
  const [Value, setValue] = useState("")
  const Navigate = useNavigate()
  const ChangeValue = e => setValue(e.target.value)
  const handleSearch = (e: any) => {
    e.preventDefault()
    if (Value == "") return
    Navigate(`/search/${Value}`)
    setValue("")
  }
  return (
    <form className='lg:mx-8  w-full flex items-center ' onSubmit={handleSearch}>
      <div className='relative w-full overflow-hidden'>
        <SearchIcon />
        <input
          type='search'
          id='default-search'
          value={Value}
          onChange={ChangeValue}
          className='block w-full p-1.5 ps-10 text-sm text-gray-900 border border-gray-200 rounded-md bg-gray-50 outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Tìm kiếm..'
        />
      </div>
      <button
        type='submit'
        onClick={handleSearch}
        className='whitespace-nowrap max-lg:px-2 max-lg:text-[12px] lg:px-4 py-1.5 text-sm text-gray-900 border border-gray-300 rounded-md ml-1 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        Tìm kiếm
      </button>
    </form>
  )
}

export default Search

import { useState } from "react"
import CustomButton from "../../Components/button/CustomButton"
import { Arrange, Format, Nationals, years, CategoryFilms } from "./index"

const FilterFilm = () => {
  const [ArrangeValue, setArrangeValue] = useState("")
  const [FormatValue, setFormatValue] = useState("")
  const [NationalValue, setNationalValue] = useState("")
  const [CurrentYear, setCurrentYear] = useState("")
  const [CategoryValue, setCategoryValue] = useState("")

  const ChangeArrange = e => setArrangeValue(e.target.value)
  const ChangeFormat = e => setFormatValue(e.target.value)
  const ChangeNational = e => setNationalValue(e.target.value)
  const ChangeYear = e => setCurrentYear(e.target.value)
  const ChangeCategory = e => setCategoryValue(e.target.value)

  const getArrange = () =>
    Arrange.map((option, index) => (
      <option
        className='text-left text-sm text-slate-200 border-none py-1'
        key={index}
        value={option}
      >
        {option}
      </option>
    ))

  const getFormat = () =>
    Format.map((option, index) => (
      <option
        className='text-left text-sm text-slate-200 border-none py-1'
        key={index}
        value={option}
      >
        {option}
      </option>
    ))

  const getNational = () =>
    Nationals.map((option, index) => (
      <option
        className='text-left text-sm text-slate-200 border-none py-1'
        key={index}
        value={option}
      >
        {option}
      </option>
    ))

  const getYears = () =>
    years.map((option, index) => (
      <option
        className='text-left text-sm text-slate-200 border-none py-1'
        key={index}
        value={option}
      >
        {option}
      </option>
    ))

  const getCategoryFilms = () =>
    CategoryFilms.map((option, index) => (
      <option
        className='text-left text-sm text-slate-200 border-none py-1 '
        key={index}
        value={option}
      >
        {option}
      </option>
    ))

  const handleFilter = () => {
    // Handle filter logic here
  }

  return (
    <div className='bg-black p-2 justify-between w-full flex items-center rounded-sm'>
      <div className='flex flex-col text-left mx-4'>
        <label htmlFor='arrange' className='text-white text-sm py-2 font-semibold'>
          Sắp Xếp
        </label>
        <select
          id='arrange'
          className='px-2 rounded-sm text-left outline-none bg-gray-700 text-slate-200 py-2  text-[14px]'
          value={ArrangeValue}
          onChange={ChangeArrange}
        >
          {getArrange()}
        </select>
      </div>

      <div className='flex flex-col text-left mx-4'>
        <label htmlFor='format' className='text-white text-sm py-2 font-semibold'>
          Định dạng
        </label>
        <select
          id='format'
          className='px-2 rounded-sm text-left outline-none bg-gray-700 text-slate-200 py-2  text-[14px]'
          value={FormatValue}
          onChange={ChangeFormat}
        >
          {getFormat()}
        </select>
      </div>

      <div className='flex flex-col text-left mx-4'>
        <label htmlFor='national' className='text-white text-sm py-2 font-semibold'>
          Quốc gia
        </label>
        <select
          id='national'
          className='px-2 rounded-sm text-left outline-none bg-gray-700 text-slate-200 py-2  text-[14px]'
          value={NationalValue}
          onChange={ChangeNational}
        >
          {getNational()}
        </select>
      </div>

      <div className='flex flex-col text-left mx-4'>
        <label htmlFor='year' className='text-white text-sm py-2 font-semibold'>
          Theo Năm
        </label>
        <select
          id='year'
          className='px-2 rounded-sm text-left outline-none bg-gray-700 text-slate-200 py-2  text-[14px]'
          value={CurrentYear}
          onChange={ChangeYear}
        >
          {getYears()}
        </select>
      </div>

      <div className='flex flex-col text-left mx-4'>
        <label htmlFor='category' className='text-white text-sm py-2 font-semibold'>
          Thể loại
        </label>
        <select
          id='category'
          className='px-2 rounded-sm text-left outline-none bg-gray-700 text-slate-200 py-2  text-[14px]'
          value={CategoryValue}
          onChange={ChangeCategory}
        >
          {getCategoryFilms()}
        </select>
      </div>

      <CustomButton
        text='Lọc Phim'
        onClick={handleFilter}
        className='text-white ml-auto bg-gradient-to-r from-red-500 via-red-600 outline-none to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:red:ring-blue-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-600/80 font-medium rounded-md text-sm px-5 py-2.5 text-left me-2 mb-2'
        type='submit'
      />
    </div>
  )
}

export default FilterFilm

import React from "react"
import { Link } from "react-router-dom"
import { PhoneIcon } from "../../images/icons"

const options = [
  {
    title: "Phim mới",
    list: ["Phim lẻ Mới", "Phim Sắp chiếu", "Phim Chiếu Rạp"],
  },
  {
    title: "Phim Lẻ",
    list: ["Phim Hành Động", "Phim Kiếm Hiệp", "Phim Viễn Tưởng"],
  },
  {
    title: "Phim Bộ",
    list: ["Phim Hàn Quốc", "Phim Trung Quốc", "Phim Mỹ"],
  },
]

const Footer = () => {
  const getOptions = (option, index) => (
    <div className='text-white px-8' key={index}>
      <h2 className='text-xl font-semibold uppercase py-2.5 max-lg:py-1  text-blue-400'>
        {option.title}
      </h2>
      <div className='flex flex-col'>
        {option.list.map((item, key) => (
          <Link
            to=''
            key={key}
            className='text-[13px] py-1.5 max-lg:py-0.5 hover:text-yellow-400 hover:shadow'
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <footer className='bg-gray-800 p-4'>
      <div className='container mx-auto flex  justify-between'>
        <p className='text-sm text-gray-400 pr-10 pt-4'>
          Copyright 2024 © <br /> Phim mới | Phim hay Phim Full HD <br />
          Xem miễn phí chất lượng cao.
        </p>
        <div className='flex flex-wrap'>
          {options.map((option, index) => getOptions(option, index))}
        </div>
        <div className='text-white flex '>
          <p className='text-gray-500 text-4xl '>{PhoneIcon}</p>
          <h2 className='pt-1 px-4'>Email Liên hệ : trilove151@gmail.com</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer

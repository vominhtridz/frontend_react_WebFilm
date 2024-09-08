import React from "react"
import { AvatarIcon, ImageIcon, InforIcon, TrailerIcon } from "../../images/icons"

const options = [
  {
    title: "Thông tin phim",
    icon: InforIcon,
  },
  {
    title: "Nhân Vật",
    icon: AvatarIcon,
  },
  {
    title: "Trailer",
    icon: TrailerIcon,
  },
  {
    title: "Hình Ảnh",
    icon: ImageIcon,
  },
]

const PathNavigate = ({ handleClick, path }) => {
  const getOptions = () =>
    options.map((option, index) => (
      <button
        className={`${path == option.title ? "border-b-2 border-green-400" : ""}  outline-none py-4 flex items-center  mr-10`}
        key={index}
        value={option.title}
        onClick={() => {
          handleClick(option.title)
        }}
      >
        <p className='pr-2.5 text-2xl text-green-400'>{option.icon}</p>
        <p className='font-medium text-sm max-lg:hidden text-gray-400'>{option.title}</p>
      </button>
    ))

  return <div className='flex items-center  w-full outline-none'>{getOptions()}</div>
}

export default PathNavigate

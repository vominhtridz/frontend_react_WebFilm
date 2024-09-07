import { Link } from "react-router-dom"
import {
  EnLargeIcon,
  ErrorIcon,
  HistoryIcon,
  InstallIcon,
  HeartIcon,
} from "../../../../images/icons"

const OptionsBtn = ({ handleError, handleInstall, handleEnLarge, handleLove, favorites }) => {
  const buttons = [
    {
      icon: EnLargeIcon,
      text: "Phóng to",
      func: handleEnLarge,
    },
    {
      icon: ErrorIcon,
      text: "Báo lỗi",
      func: handleError,
    },
    {
      icon: InstallIcon,
      text: "Tải về",
      func: handleInstall,
    },
  ]
  const getButton = buttons.map((option, index) => (
    <button
      onClick={option.func}
      key={index}
      className='flex outline-none  items-center text-sm font-medium px-3 text-white hover:text-yellow-400'
    >
      <p className='px-2 text-slate-300 text-lg'>{option.icon}</p>
      {option.text}
    </button>
  ))
  return (
    <div className='flex items-center '>
      {getButton}
      <button
        onClick={handleLove}
        className={`flex items-center text-sm font-medium px-3 ${favorites ? "text-green-400" : "text-white "}  hover:text-yellow-400`}
      >
        <p className={`px-2  text-lg`}>{HeartIcon}</p>
        {favorites ? "Đang Yêu thích" : "Yêu thích"}
      </button>
      <Link
        to='/user/history'
        className='flex items-center text-sm font-medium px-3 text-white hover:text-yellow-400'
      >
        <p className='px-2 text-slate-300 text-lg'>{HistoryIcon}</p>
        Lịch Sử Xem
      </Link>
    </div>
  )
}

export default OptionsBtn

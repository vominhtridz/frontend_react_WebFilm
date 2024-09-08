import { Link } from "react-router-dom"
import { EnLargeIcon, ErrorIcon, InstallIcon } from "../../../../images/icons"

const OptionsBtn = ({ handleError, handleInstall, handleEnLarge }) => {
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
      className='flex outline-none  items-center max-lg:text-[12px] text-sm font-medium max-lg:px-1 px-3 text-white hover:text-yellow-400'
    >
      <p className='px-2 text-slate-300 text-lg'>{option.icon}</p>
      {option.text}
    </button>
  ))
  return <div className='flex '>{getButton}</div>
}

export default OptionsBtn

import { useEffect, useState } from "react"
import OptionVideoHandler from "./OptionVideoHandler/OptionVideoHandler"
import { CheckIcon, ErrorIcon, ExitIcon } from "../../../images/icons"
import { handleLabel } from "../../../Components/Func"
import { useMyContext } from "../../../context/context"
import Cookies from "js-cookie"
import { useLocation } from "react-router-dom"
const MyVideoPlayer = ({ Episodes, CurrEpisode, loading }) => {
  const [Enlarge, setEnlarge] = useState(false)
  const [favorites, setFavorites] = useState(() => {
    const local = Cookies.get("Filmslove")
    if (!local) return false
    const location = window.location.pathname.split("/")
    const result = JSON.parse(local).find(film => `${location[1]}/${location[2]}` === film)
    return result ? true : false
  })
  useEffect(() => {
    const SetHistory = async () => {
      const OldFilms = Cookies.get("history") ? JSON.parse(Cookies.get("history")) : null
      const pathFilmsCurr = `${path[1]}/${path[2]}`
      if (OldFilms) {
        const FoundPath = OldFilms.find(path => path === pathFilmsCurr)
        if (FoundPath) return
        else {
          const newFilms = [...OldFilms, pathFilmsCurr]
          Cookies.set("history", JSON.stringify(newFilms))
        }
      } else Cookies.set("history", JSON.stringify([pathFilmsCurr]))
    }
    SetHistory()
  }, [])
  const path = useLocation().pathname.split("/")
  const darkColor = Enlarge ? { backgroundColor: "rgba(0, 0, 0, 0.9)" } : null
  const { setMessLabel, setVisibMessLabel } = useMyContext()
  const handleError = () => {
    // Implementation needed
    handleLabel(
      { title: "Gửi báo lỗi thành công", icon: CheckIcon, color: "bg-green-500" },
      1500,
      setVisibMessLabel,
      setMessLabel,
    )
  }
  const handleInstall = () => {
    handleLabel(
      { title: "Lỗi tải về", icon: ErrorIcon, color: "bg-red-500" },
      1500,
      setVisibMessLabel,
      setMessLabel,
    )
  }
  const handleLove = () => {
    let OldFilms = Cookies.get("Filmslove") ? JSON.parse(Cookies.get("Filmslove")) : null
    if (!favorites) {
      const pathFilmsCurr = `${path[1]}/${path[2]}`
      let newFilms = []
      if (OldFilms) newFilms = [...OldFilms, pathFilmsCurr]
      else newFilms = [pathFilmsCurr]
      Cookies.set("Filmslove", JSON.stringify(newFilms))
      setFavorites(true)
    } else {
      const newFilm = OldFilms.filter(film => `${path[1]}/${path[2]}` !== film)
      Cookies.set("Filmslove", JSON.stringify(newFilm))
      setFavorites(false)
    }
  }
  const handleEnLarge = () => setEnlarge(true)
  const ExitEnlarge = () => setEnlarge(false)
  return (
    <div className='p-0.5'>
      <div
        className={`${Enlarge ? "transition-all an fixed ease-in-out duration-800 left-0 right-0 top-0 bottom-0 z-50 bg-[grba(0,0,0,1)]" : ""}`}
        style={darkColor}
      >
        <iframe
          src={CurrEpisode.link_embed}
          width='100%'
          className={`lg:h-[450px] max-lg:h-[225px]  ${Enlarge ? "absolute border border-gray-900 shadow max-lg:left-4 max-lg:w-[90%] lg:left-20 top-10  lg:h-[35rem]" : ""}`}
          frameBorder='0'
          allowFullScreen
          title='Video Player'
        ></iframe>
        {Enlarge && (
          <button
            onClick={ExitEnlarge}
            className='absolute top-72 max-lg:right-44 text-2xl rounded-full p-2  right-32 hover:text-3xl bg-green-50 text-gray-500'
          >
            {ExitIcon}
          </button>
        )}
      </div>

      <OptionVideoHandler
        favorites={favorites}
        handleError={handleError}
        handleInstall={handleInstall}
        handleEnLarge={handleEnLarge}
        handleLove={handleLove}
        Episodes={Episodes.episodes[0].server_data}
      />
    </div>
  )
}

export default MyVideoPlayer

import React from "react"
import { BackIcon, NextIcon } from "../../../../images/icons"
import { Link, useLocation, useParams } from "react-router-dom"
import { ExtractNumber } from "../../../../Components/Func"
import OptionsBtn from "./OptionsBtn"

const OptionVideoHandler = ({
  Episodes,
  favorites,
  handleError,
  handleInstall,
  handleEnLarge,
  handleLove,
}) => {
  const location = useLocation()
  const path = location.pathname.split("/")
  const { Episode } = useParams()
  const CurrentEpisode = ExtractNumber(Episode)

  const prevEpisode = CurrentEpisode > 1 ? CurrentEpisode - 1 : 1
  const nextEpisode = `${CurrentEpisode <= 8 ? "0" : ""}${CurrentEpisode + 1}`
  return (
    <div>
      {Episodes && (
        <div className='flex py-4 '>
          {CurrentEpisode > 1 ? (
            <Link
              to={`/phim/${path[2]}/tap-${CurrentEpisode <= 10 ? "0" : ""}${prevEpisode}`}
              className='flex items-center text-sm font-medium px-3 text-white hover:text-yellow-400'
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <p className='px-2 text-slate-300 text-base'>{BackIcon}</p>
              Tập Trước
            </Link>
          ) : (
            ""
          )}
          {CurrentEpisode <= Episodes.length - 1 ? (
            <Link
              to={`/phim/${path[2]}/tap-${nextEpisode}`}
              className='flex items-center text-sm font-medium px-3 text-white hover:text-yellow-400'
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <p className='px-2 text-slate-300 text-base'>{NextIcon}</p>
              Tập Tiếp
            </Link>
          ) : (
            ""
          )}

          <OptionsBtn
            favorites={favorites}
            handleError={handleError}
            handleInstall={handleInstall}
            handleEnLarge={handleEnLarge}
            handleLove={handleLove}
            Episodes={Episodes}
          />
        </div>
      )}
    </div>
  )
}

export default OptionVideoHandler

import React, { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import FbComment from "../Comment"
import BaseInfor from "../BaseInfor"
import FilmRelated from "../FilmRelated"
import MyVideoPlayer from "./VideoJS"
import EpisodeBox from "./EpisodeBox"
import { getFilms } from "..//..//..//apis/apis"
import TabNavigate from "../../Search/TabNavigate"
const Episode = () => {
  const { Episode } = useParams()
  const [Episodes, setEpisodes] = useState()
  let [CurrEpisode, setCurrEpisode] = useState()
  const path = useLocation().pathname.split("/")
  const location = useLocation().pathname
  useEffect(() => {
    const fetchFilms = async () => {
      getFilms("/" + path[1] + "/" + path[2])
        .then(data => {
          let arr = data.data.episodes[0].server_data
          setEpisodes(data.data)

          for (let i = 0; i < arr.length; i++) {
            if (arr[i].slug == Episode) {
              setCurrEpisode(arr[i])
              return
            }
          }
        })
        .catch(err => console.log(err))
    }
    fetchFilms()
  }, [location])
  return (
    <>
      {Episodes && (
        <div className='mr-8 w-full mb-20 z-50'>
          <TabNavigate listFilms={Episodes} />
          <div className='w-full z-50 py-2'>
            <MyVideoPlayer CurrEpisode={CurrEpisode} Episodes={Episodes} />
            <EpisodeBox Episodes={Episodes} />
            <BaseInfor listFilms={Episodes} />
            <FbComment />
            <FilmRelated />
          </div>
        </div>
      )}
    </>
  )
}

export default Episode

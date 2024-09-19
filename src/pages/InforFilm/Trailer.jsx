import React from "react"
import { getYouTubeVideoId } from "..//..//Components/Func/index"
const Trailer = ({ listFilms }) => {
  const videoId = listFilms.trailer_url == "" ? "" : getYouTubeVideoId(listFilms.trailer_url)
  const videoURL = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className='bg-slate-800 p-4 flex items-center justify-center h-[30rem] rounded-sm shadow'>
      {listFilms.trailer_url == "" ? (
        ""
      ) : (
        <iframe
          className='w-full h-full'
          src={videoURL}
          frameBorder='0'
          allowFullScreen=''
        ></iframe>
      )}
    </div>
  )
}

export default Trailer

import React, { useEffect, useState } from "react"
import PathNavigate from "./PathNavigate"
import BaseInfor from "./BaseInfor"
import Figure from "./Figure"
import AllInforFilm from "./AllInforFIlm/AllInforFilm"
import Trailer from "./Trailer"
import Image from "./Image"
import FbComment from "./Comment"
import FilmRelated from "./FilmRelated"
import { useLocation } from "react-router-dom"
import { getFilms } from "..//..//apis/apis"
import TabNavigate from "../Search/TabNavigate"
const InforFilm = () => {
  const [TabRoute, setTabRoute] = useState("Thông tin phim")
  const [listFilms, setListFilms] = useState()
  const path = useLocation().pathname
  const ChangePath = e => setTabRoute(e)
  useEffect(() => {
    const fetchFilms = async () => {
      getFilms(path)
        .then(data => {
          window.scrollTo(0, 0)
          setListFilms(data.data)
        })
        .catch(err => console.log(err))
    }
    fetchFilms()
  }, [path])
  console.log(listFilms)
  return (
    <>
      {listFilms && (
        <div className='w-full'>
          {typeof listFilms !== "string" || listFilms.movie == "" ? (
            <TabNavigate listFilms={listFilms} />
          ) : (
            ""
          )}
          {typeof listFilms === "string" || listFilms.movie == "" ? (
            <div className='text-2xl text-white font-medium'>
              Phim Đang Bị Lỗi Truy Cập Lại Sau Bạn Nhé!
            </div>
          ) : (
            <div className='lg:mr-8 max-lg:p-2 w-full lg:mb-20'>
              <BaseInfor listFilms={listFilms} />
              <PathNavigate handleClick={ChangePath} path={TabRoute} />
              {TabRoute === "Thông tin phim" ? (
                <AllInforFilm listFilms={listFilms} ChangePath={ChangePath} />
              ) : null}
              {TabRoute === "Nhân Vật" ? <Figure listFilms={listFilms.movie} /> : null}
              {TabRoute === "Trailer" ? <Trailer listFilms={listFilms.movie} /> : null}
              {TabRoute === "Hình Ảnh" ? <Image listFilms={listFilms} /> : null}

              <FbComment />
              <FilmRelated />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default InforFilm

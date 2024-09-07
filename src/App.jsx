import DefaultLayout from "./Components/DefaultLayout/DefaultLayout"
import { MyProvider } from "./context/context"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Search from "./pages/Search/Search"
import InforFilm from "./pages/InforFilm/InforFilm"
import Episode from "./pages/InforFilm/Episode/Episode"
import ListFilm from "./pages/ListFilm/ListFilm"
import PageNotFound from "./pages/PageNotFound"
import Feedback from "./pages/FeedBack/FeedBack"
import ListFilmYear from "./pages/ListFilm/ListFilmYear"
import UserInfor from "./pages/User/UserInfor"
import HistoryWatch from "./pages/User/HistoryWatch"
import FilmsFavorite from "./pages/User/FilmsFavorite"
function App() {
  return (
    <>
      <MyProvider>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} path='' />
            <Route element={<Login />} path='login' />
            <Route element={<Register />} path='register' />
            <Route element={<Search />} path='search/:keySearch' />
            <Route element={<InforFilm />} path='phim/:FilmName' />
            <Route element={<Episode />} path='phim/:FilmName/:Episode' />
            <Route element={<ListFilm />} path='danh-sach/:listValue' />
            <Route element={<ListFilmYear />} path='danh-sach/phim-theo-nam' />
            <Route element={<ListFilm />} path='danh-sach/:listValue/?page=:pageid' />
            <Route element={<ListFilm />} path='the-loai/:listValue' />
            <Route element={<ListFilm />} path='the-loai/:listValue/?page=:pageid' />
            <Route element={<ListFilm />} path='quoc-gia/:listValue' />
            <Route element={<ListFilm />} path='quoc-gia/:listValue/?page=:pageid' />
            {/* User */}
            <Route element={<UserInfor />} path='user/infor' />
            <Route element={<HistoryWatch />} path='user/history' />
            <Route element={<FilmsFavorite />} path='user/favorite' />
            <Route element={<PageNotFound />} path='*' />
            <Route element={<Feedback />} path='/feedback' />
          </Route>
        </Routes>
      </MyProvider>
    </>
  )
}

export default App

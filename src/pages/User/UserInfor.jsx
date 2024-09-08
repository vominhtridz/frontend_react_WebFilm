import React, { useEffect, useRef, useState } from "react"
import { CheckIcon, ErrorIcon } from "../../images/icons"
import useAxiosPrivate from "../../hook/useAxiosPrivate"
import { useLocation, useNavigate } from "react-router-dom"
import { useMyContext } from "../../context/context"
import defaultImg from "..//..//images/userImg.png"
import Cookies from "js-cookie"
import { AxiosPrivate } from "../../apis/ServerApi"
import { handleLabel } from "../../Components/Func"
import { Storage } from "..//..//firebase/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import UserForm from "./UserForm"
const UserInfor = () => {
  const [gender, setGender] = useState(() => {
    const local = JSON.parse(localStorage.getItem("user"))
    return local ? local.gender : "male"
  })
  const [username, setUserName] = useState(() => {
    const local = JSON.parse(localStorage.getItem("user"))
    return local ? local.Name : "User"
  })
  const [pwd, setPwd] = useState("")
  const { setVisibMessLabel, setMessLabel } = useMyContext()
  const fileUserImg = useRef(null)
  const [img, setImg] = useState(() => {
    const local = JSON.parse(localStorage.getItem("user"))
    return local ? local.image : defaultImg
  })
  const [file, setFile] = useState()
  const { UserInfor, setUserInfor } = useMyContext()
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()
    const getUsers = async () => {
      try {
        const userid = Cookies.get("uid")
        const response = await axiosPrivate.get(`/user/${userid}`, {
          signal: controller.signal,
        })
        const Name = response.data.data.username
        const gender = response.data.data.gender
        const image = response.data.data.image
        const user = { Name, gender, image }
        localStorage.setItem("user", JSON.stringify(user))
        isMounted && setUserInfor(response.data.data)
      } catch (err) {
        console.log(err)
        navigate("/login", { state: { from: location }, replace: true })
      }
    }

    getUsers()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])
  const handleSendData = url => {
    const userid = Cookies.get("uid")
    const data = { username, gender, pwd, img: url }
    AxiosPrivate.put(`/user/edit/${userid}`, data)
      .then(res => {
        if (res.statusText == "OK") {
          handleLabel(
            { title: "Thay đổi thành công", icon: CheckIcon, color: "bg-green-500" },
            1500,
            setVisibMessLabel,
            setMessLabel,
          )
          const NewUserInfor = { gender, img, Name: username }
          localStorage.setItem("user", JSON.stringify(NewUserInfor))
          navigate("/")
        }
      })
      .catch(err => {
        handleLabel(
          { title: "Lỗi hệ thống", icon: ErrorIcon, color: "bg-red-500" },
          1500,
          setVisibMessLabel,
          setMessLabel,
        )
        console.log(err)
      })
  }
  // submit handle
  const handleSubmit = e => {
    e.preventDefault()
    const storageRef = ref(Storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    getDownloadURL(uploadTask.snapshot.ref).then(url => {
      handleSendData(url)
    })
  }
  // handle change file image
  const handleChangeFile = e => {
    const selectedFile = e.target.files?.[0]
    setFile(selectedFile)
    setImg(URL.createObjectURL(selectedFile))
  }
  const handleChange = event => setGender(event.target.value)
  const ChangePwd = event => setPwd(event.target.value)
  const ChangeUserName = event => setUserName(event.target.value)
  return (
    <>
      {UserInfor ? (
        <div className='w-full bg-gray-600 p-8 min-h-[50vh] rounded-sm shadow '>
          <h2 className='text-4xl font-medium  text-white mx-auto flex justify-center'>
            Thông tin tài khoản
          </h2>
          <div className='flex max-lg:flex-col pt-10 w-full'>
            <div className='font-medium text-white text-lg pr-10'>
              <img src={img} alt='' className='object-cover max-w-60 max-h-36 rounded-sm' />
              <p className='mx-auto flex justify-center py-2'>{username || "User"}</p>
            </div>
            <UserForm
              fileUserImg={fileUserImg}
              UserInfor={UserInfor}
              handleSubmit={handleSubmit}
              username={username}
              ChangeUserName={ChangeUserName}
              gender={gender}
              handleChange={handleChange}
              pwd={pwd}
              ChangePwd={ChangePwd}
              handleChangeFile={handleChangeFile}
            />
          </div>
        </div>
      ) : (
        <div>Lỗi trang cá nhân</div>
      )}
    </>
  )
}

export default UserInfor

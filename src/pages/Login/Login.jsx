import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { LoginUser } from "../../apis/ServerApi"
import FormLogin from "./FormLogin"
import { useMyContext } from "../../context/context"
import { EmailRegex, pwdRegex } from "../../Components/regex"
import { handleLabel } from "../../Components/Func"
import { CheckIcon, ErrorIcon } from "../../images/icons"
import Cookies from "js-cookie"
const Login = () => {
  const navigate = useNavigate()
  const { setVisibMessLabel, setAuth, setMessLabel } = useMyContext()
  const [email, setEmail] = useState("")
  const [pwd, setpwd] = useState("")
  const [EmailErr, setEmailErr] = useState(false)
  const [showPwd, setShowPwd] = useState(false)
  const [pwdErr, setPwdErr] = useState(false)
  const jwt = Cookies.get("token")
  const handleLogin = e => {
    e.preventDefault()
    if (!email || !pwd) {
      handleLabel(
        { title: "Email hoặc mật khẩu không được bỏ trống.", icon: ErrorIcon, color: "bg-red-500" },
        1500,
        setVisibMessLabel,
        setMessLabel,
      )
      return
    }
    // CALL API
    try {
      const User = JSON.stringify({ email, pwd })
      LoginUser(User)
        .then(res => {
          const token = res.data.AccessToken
          const jwt = res.data.refreshToken
          const userid = res.data.userid
          const roles = res.data.roles.filter(role => role !== null)
          const mess = res.data.Message ? res.data.Message : "Đăng Nhập thành công!"
          handleLabel(
            { title: mess, icon: CheckIcon, color: "bg-green-500" },
            1500,
            setVisibMessLabel,
            setMessLabel,
          )
          setAuth({ accessToken: token, userid, roles })
          Cookies.set("token", token, { expires: 1 })
          Cookies.set("jwt", jwt, { expires: 30 })
          Cookies.set("logged", true)
          Cookies.set("uid", `${userid}`)
          Cookies.set("roles", `${roles}`)
          //clear state
          setEmail("")
          setpwd("")
          navigate("/")
        })
        .catch(err => {
          console.log(err)
          const mess = err.response.data.Message ? err.response.data.Message : "Đăng Nhập Thất bại!"
          handleLabel(
            { title: mess, icon: ErrorIcon, color: "bg-red-500" },
            1600,
            setVisibMessLabel,
            setMessLabel,
          )
        })
      // clear state
    } catch (err) {
      if (!err?.response) {
        handleLabel(
          { title: "Server không phản hồi!", icon: ErrorIcon, color: "bg-red-500" },
          1500,
          setVisibMessLabel,
          setMessLabel,
        )
      } else if (err.response?.status === 409) {
        handleLabel(
          { title: "Email đã có sẵn!", icon: ErrorIcon, color: "bg-red-500" },
          1500,
          setVisibMessLabel,
          setMessLabel,
        )
      } else {
        handleLabel(
          { title: "Đăng kí Thất bại", icon: ErrorIcon, color: "bg-red-500" },
          1500,
          setVisibMessLabel,
          setMessLabel,
        )
      }
    }
  }
  useEffect(() => {
    setEmailErr(!EmailRegex.test(email))
  }, [email])
  useEffect(() => {
    setPwdErr(!pwdRegex.test(pwd))
  }, [pwd])
  const changeEmail = e => setEmail(e.target.value)
  const ChangePwd = e => setpwd(e.target.value)
  const ShowPwd = () => setShowPwd(!showPwd)
  return (
    <>
      <section className='w-full bg-gray-50 dark:bg-gray-700'>
        <div className='flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Đăng nhập
              </h1>
              <FormLogin
                handleLogin={handleLogin}
                email={email}
                pwd={pwd}
                EmailErr={EmailErr}
                pwdErr={pwdErr}
                showPwd={showPwd}
                ShowPwd={ShowPwd}
                changeEmail={changeEmail}
                ChangePwd={ChangePwd}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login

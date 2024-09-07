import React, { useEffect, useState } from "react"
import FormRegister from "./FormRegister"
import { EmailRegex, pwdRegex } from "../../Components/regex"
import { handleLabel } from "../../Components/Func"
import { useMyContext } from "..//..//context/context"
import { CheckIcon, ErrorIcon } from "../../images/icons"
import { CreateUser } from "../../apis/ServerApi"
import { Navigate, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
const Register = () => {
  const { setVisibMessLabel, setMessLabel } = useMyContext()
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const [pwd, setpwd] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")
  const [EmailErr, setEmailErr] = useState(false)
  const [pwdErr, setPwdErr] = useState(false)
  const [showPwd, setShowPwd] = useState(false)
  const [showConfirmPwd, setShowConfirmPwd] = useState(false)
  const [confirmPwdErr, setConfirmPwdErr] = useState(false)
  const jwt = Cookies.get("token")
  const CheckError = () => {
    if (EmailErr || pwdErr) {
      handleLabel(
        { title: "Email hoặc Mật Khẩu chưa đúng !", icon: ErrorIcon, color: "bg-red-500" },
        1500,
        setVisibMessLabel,
        setMessLabel,
      )
      return false
    }
    if (confirmPwdErr) {
      handleLabel(
        { title: "Mật khẩu không khớp", icon: ErrorIcon, color: "bg-red-500" },
        1500,
        setVisibMessLabel,
        setMessLabel,
      )
      return false
    }
  }
  const handleRegister = async e => {
    e.preventDefault()
    if (CheckError() == false) return
    try {
      const newUser = JSON.stringify({ email, pwd })
      CreateUser(newUser)
        .then(res => {
          const mess = res.data.Message || "Đăng kí thành công!"
          handleLabel(
            { title: mess, icon: CheckIcon, color: "bg-red-500" },
            1500,
            setVisibMessLabel,
            setMessLabel,
          )
          //clear state
          setEmail("")
          setConfirmPwd("")
          setpwd("")
          navigate("/login")
        })
        .catch(err => {
          const mess = err.response.data.Message || "Đăng kí Thất bại!"
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
    setConfirmPwdErr(confirmPwd !== pwd)
  }, [pwd, confirmPwd])
  const changeEmail = e => setEmail(e.target.value)
  const ChangePwd = e => setpwd(e.target.value)
  const ShowPwd = () => setShowPwd(!showPwd)
  const ShowConfirmPwd = () => setShowConfirmPwd(!showConfirmPwd)
  const ChangeConfirmPwd = e => setConfirmPwd(e.target.value)
  return (
    <>
      {jwt ? (
        <Navigate to='/' replace={true} />
      ) : (
        <section className=''>
          <div className='flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0'>
            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                  Đăng Kí !
                </h1>
                <FormRegister
                  EmailErr={EmailErr}
                  pwdErr={pwdErr}
                  confirmPwdErr={confirmPwdErr}
                  email={email}
                  pwd={pwd}
                  confirmPwd={confirmPwd}
                  changeEmail={changeEmail}
                  ChangePwd={ChangePwd}
                  showPwd={showPwd}
                  showConfirmPwd={showConfirmPwd}
                  ChangeConfirmPwd={ChangeConfirmPwd}
                  handleRegister={handleRegister}
                  ShowPwd={ShowPwd}
                  ShowConfirmPwd={ShowConfirmPwd}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Register

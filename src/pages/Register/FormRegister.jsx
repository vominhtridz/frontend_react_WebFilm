import React, { useEffect } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { EyeIcon, EyeOff } from "../../images/icons"

const FormRegister = ({
  handleRegister,
  email,
  pwd,
  showPwd,
  showConfirmPwd,
  confirmPwd,
  EmailErr,
  pwdErr,
  confirmPwdErr,
  changeEmail,
  ChangePwd,
  ChangeConfirmPwd,
  ShowPwd,
  ShowConfirmPwd,
}) => {
  const EmailRef = useRef()
  useEffect(() => {
    EmailRef.current.focus()
  }, [])
  return (
    <form className='space-y-4 md:space-y-6' onSubmit={handleRegister}>
      <div>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Email
        </label>
        <input
          ref={EmailRef}
          type='email'
          name='email'
          onChange={changeEmail}
          id='email'
          value={email}
          className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='name@gmail.com'
          required=''
        />
        {EmailErr && (
          <p className='text-red-500 pl-1 py-0 my-0'>Email nên có @gmail.com ví dụ 123@gmail.com</p>
        )}
      </div>
      <div className='relative'>
        <label
          htmlFor='pwd'
          className='block mb-2  text-sm font-medium text-gray-900 dark:text-white'
        >
          Mật khẩu
        </label>
        <input
          type={`${showPwd ? "text" : "password"}`}
          name='pwd'
          id='pwd'
          value={pwd}
          onChange={ChangePwd}
          placeholder='Mật khẩu'
          className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required=''
          autoComplete=''
        />
        <label
          htmlFor=''
          className='absolute right-3 top-9 cursor-pointer text-slate-300 text-[24px]'
          onClick={ShowPwd}
        >
          {showPwd ? EyeIcon : EyeOff}
        </label>

        {pwdErr && (
          <label className='text-red-500 pl-1 py-0 my-0'>
            Mật khẩu có chứa chữ và số tối thiểu 6 kí tự
          </label>
        )}
      </div>
      <div className='relative'>
        <label
          htmlFor='password1'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Nhập Lại Mật khẩu
        </label>
        <input
          type={`${showConfirmPwd ? "text" : "password"}`}
          name='password1'
          id='password1'
          value={confirmPwd}
          onChange={ChangeConfirmPwd}
          autoComplete=''
          placeholder='Nhập Lại Mật khẩu'
          className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required=''
        />
        <label
          htmlFor=''
          className='absolute right-3 top-9 cursor-pointer text-slate-300 text-[24px]'
          onClick={ShowConfirmPwd}
        >
          {showConfirmPwd ? EyeIcon : EyeOff}
        </label>
        {confirmPwdErr && (
          <label className='text-red-500 pl-1 py-0 my-0'>Mật khẩu không khớp</label>
        )}
      </div>
      <button
        onClick={handleRegister}
        type='submit'
        className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
      >
        Đăng Kí
      </button>
      <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
        Đã có tài khoản?
        <Link
          to='/login'
          className='font-medium text-primary-600 hover:underline dark:text-primary-500'
        >
          Đăng Nhập
        </Link>
      </p>
    </form>
  )
}

export default FormRegister

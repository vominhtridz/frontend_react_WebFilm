import React from "react"
import { PrivateIcon, UserIcon, mailIcon } from "../../images/icons"
import { genderOptions } from "."

const UserForm = ({
  fileUserImg,
  UserInfor,
  handleSubmit,
  username,
  ChangeUserName,
  gender,
  handleChange,
  pwd,
  ChangePwd,
  handleChangeFile,
}) => {
  return (
    <form action='' onSubmit={handleSubmit} className='w-full'>
      <div className='flex items-center text-white w-full py-6'>
        <label htmlFor='email' className='text-lg px-4 font-medium w-[10rem]'>
          Email
        </label>
        <p className='w-full flex items-center select-none rounded-sm px-4 cursor-not-allowed py-2 text-slate-600 font-medium text-base bg-gray-300 '>
          <p className='text-xl pr-2'>{mailIcon}</p> {UserInfor.email}
        </p>
      </div>
      <div className='flex items-center  text-white w-full'>
        <label htmlFor='email' className='text-lg px-4 font-medium w-[10rem]'>
          Tên
        </label>
        <div className='w-full border-b py-2 border-gray-500 flex'>
          <p className='text-gray-400 text-2xl pr-2'>{UserIcon}</p>
          <input
            type='text'
            value={username}
            onChange={ChangeUserName}
            className='font-medium  border-none text-base outline-none bg-gray-600'
          />
        </div>
      </div>
      <div className='flex items-center text-white w-full py-6'>
        <label htmlFor='email' className='text-lg px-4 font-medium w-[10rem]'>
          Giới tính
        </label>
        <div className='w-full   flex items-center '>
          {genderOptions.map(option => (
            <label key={option.value} className='flex pr-8 text-base items-center'>
              <input
                type='radio'
                name='gender'
                value={option.value}
                checked={gender === option.value}
                onChange={handleChange}
                className='form-radio text-base text-indigo-600'
              />
              <span className='ml-2 font-medium'>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className='flex items-center text-white w-full py-6'>
        <label htmlFor='email' className='text-lg px-4 font-medium w-[10rem]'>
          Mật Khẩu
        </label>
        <div className='w-full border-b py-2 border-gray-500 flex'>
          <p className='text-gray-400 text-2xl pr-2'>{PrivateIcon}</p>
          <input
            value={pwd}
            onChange={ChangePwd}
            type='text'
            className='font-medium  border-none text-base outline-none bg-gray-600'
          />
        </div>
      </div>
      <div className='flex items-center text-white w-full py-6'>
        <label htmlFor='email' className='text-lg px-4 font-medium w-[10rem]'>
          Ảnh
        </label>
        <div className='w-full'>
          <div className='bg-gray-500 rounded-sm py-2.5 w-full px-4'>
            <input
              type='file'
              multiple
              onChange={handleChangeFile}
              ref={fileUserImg}
              name='fileUserImg'
              accept='image/*'
            />
          </div>
          <p className='text-gray-300'>(Yêu cầu ảnh nhỏ hơn 5MB)</p>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className=' ml-auto text-white block bg-gradient-to-r max-lg:w-full from-blue-500 outline-none whitespace-nowrap via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-md text-sm px-5 py-1.5 text-center me-2 mb-2 '
      >
        Thay đổi
      </button>
    </form>
  )
}

export default UserForm

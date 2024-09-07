// src/FeedbackForm.js
import React, { useState } from "react"
import PathNavigate from "../InforFilm/PathNavigate"
import { useMyContext } from "../../context/context"
import { handleLabel } from "../../Components/Func"
import { CheckIcon } from "../../images/icons"
import { useNavigate } from "react-router-dom"

const Feedback = () => {
  const { setVisibMessLabel, setMessLabel } = useMyContext()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
    subscribe: false,
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Xử lý gửi form ở đây
    handleLabel(
      { title: "Cảm ơn Bạn đã phản hồi lỗi sẽ được xem xét.", icon: CheckIcon },
      2000,
      setVisibMessLabel,
      setMessLabel,
    )
    navigate("/")
  }

  return (
    <div className='lg:max-w-2xl mx-auto p-4 bg-slate-800 rounded-sm text-white'>
      <h1 className='text-2xl font-bold mb-4'>Phản hồi lỗi </h1>
      <form onSubmit={handleSubmit} className='space-y-4 w-full'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium text-white'>
            Họ và Tên
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            placeholder='Tên...'
            onChange={handleChange}
            className='mt-1 block w-full p-2 border outline-none border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            required
          />
        </div>

        <div>
          <label htmlFor='email' className='block text-sm font-medium text-white'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border outline-none border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            required
            placeholder='123@gmail.com'
          />
        </div>

        <div>
          <label htmlFor='comments' className='block text-sm font-medium text-white'>
            Nội dung phản hồi
          </label>
          <textarea
            id='comments'
            name='comments'
            value={formData.comments}
            onChange={handleChange}
            rows='4'
            placeholder='Nhập nội dung...'
            className='mt-1 block w-full p-2 border outline-none border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          />
        </div>

        <button
          type='submit'
          className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-sm flex justify-end shadow-sm hover:bg-blue-700'
        >
          Gửi
        </button>
      </form>
    </div>
  )
}

export default Feedback

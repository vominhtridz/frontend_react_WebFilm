const CustomLabel = ({ obj }) => {
  return (
    <div className='fixed top-0 z-50 right-0 left-0 bottom-0 '>
      <div className={` absolute top-20 right-20 z-20`}>
        <div
          className={`flex items-center ${obj.color} px-10 font-medium    py-10 text-sm rounded-sm shadow `}
        >
          <p className={`mx-2 text-3xl rounded-full ${obj.color} text-white`}>{obj.icon}</p>
          <label className='text-white text-lg'>{obj.title}</label>
        </div>
      </div>
    </div>
  )
}

export default CustomLabel

const FailureFullLabel = ({ text }) => {
  return (
    <div className='fixed z-50 top-0 right-0 left-0 bottom-0 '>
      <div className='fixed top-28 right-[40%] z-20'>
        <div className='flex items-center bg-white px-4 py-2.5 text-sm rounded-sm shadow-md border border-slate-200'>
          <p className='px-2 mr-2 py-0.5 text-sm flex items-center justify-center rounded-full bg-red-500 text-white'>
            X
          </p>
          <label className=''>{text}</label>
        </div>
      </div>
    </div>
  )
}

export default FailureFullLabel

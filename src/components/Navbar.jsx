import React from 'react'

const navbar = () => {
  return (
    <nav className='h-10 w-full flex bg-slate-600  gap-x-96 items-center cursor-pointer'>
        <div className="logo">
            <span className='font-bold text-3xl mx-6 text-gray-300 md:hover:text-slate-200 duration-100'>iTask</span>
        </div>

        <ul className="flex gap-9 ml-40 text-lg text-slate-100 cursor-pointer font-semibold">
            <li className='md:hover:text-slate-400 transition-all duration-500'>Home</li>
            <li className='md:hover:text-slate-400 transition-all duration-500'>Your Tasks</li>
            
        </ul>
    </nav>
  )
}

export default navbar

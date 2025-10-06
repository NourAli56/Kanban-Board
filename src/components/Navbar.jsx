import React from 'react'
import InputSearch from './ui/InputSearch'
import { IconNav1, IconNav2, IconNav3, IconNav4, IconNav5, IconNav6, IconNav7 } from './iconsAsSvg'

export default function Navbar() {
  return (
    <div className='bg-white rounded-[20px] mt-[10px] ml-[10px] h-[60px] flex items-center justify-between px-4' >
      <InputSearch />
      <div className='flex items-center gap-2' >
        <div className='cursor-pointer' >
          <IconNav1 />
        </div>
        <div className='cursor-pointer' >
          <IconNav2 />
        </div>
        <div className='cursor-pointer' >
          <IconNav3 />
        </div>
        <div className='cursor-pointer' >
          <IconNav4 />
        </div>
        <div className='cursor-pointer' >
          <IconNav5 />
        </div>
        <div className='cursor-pointer' >
          <IconNav6 />
        </div>
        <div className='cursor-pointer' >
          <IconNav7 />
        </div>
        <div className='w-[44px] h-[44px] rounded-[50%] bg-[#00579F] flex items-center justify-center' >
          <p className='text-white' >N</p>
        </div>
      </div>
    </div>
  )
}

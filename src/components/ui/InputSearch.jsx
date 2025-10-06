import React from 'react'
import { SearchIcon } from '../iconsAsSvg'

export default function InputSearch() {
  return (
    <div className='flex bg-[#F8F8F8] border border-[#E5E7EB] rounded-[10px] '>
      <input className='bg-transparent outline-none py-[4px] px-2'
      placeholder='بحث' />
      <div className='py-[4px] px-2 cursor-pointer' >
        <SearchIcon />
      </div>

    </div>
  )
}

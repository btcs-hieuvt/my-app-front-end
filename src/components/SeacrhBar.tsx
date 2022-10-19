import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>
}
function SeacrhBar(props: Props) {
  const { setShowSearch } = props
  return (
    <div className="w-[1100px] h-[58px] bg-[#222] flex items-center justify-between px-6">
      <div className="flex items-center w-[500px]">
        <BsSearch />
        <input
          type="text"
          className=" bg-[#222] w-[400px] px-[20px] text-[#fff] outline-none text-base placeholder:text-[#888] tracking-wider"
          placeholder="Search razer.com"
          autoFocus
          maxLength={30}
        />
      </div>
      <AiOutlineClose className="cursor-pointer hover:text-[#fff]" onClick={() => setShowSearch(false)} />
    </div>
  )
}

export default SeacrhBar

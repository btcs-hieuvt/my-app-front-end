import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

interface Props {
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>
}
function SeacrhBar(props: Props) {
  const { setShowSearch } = props
  const navigate = useNavigate()
  const [textSearch, setTextSearch] = useState<string>('')
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && textSearch.trim()) {
      navigate(`/search/${textSearch}`)
      setTextSearch('')
    }
  }
  return (
    <div className="w-[1100px] h-[58px] bg-[#222] flex items-center justify-between px-6">
      <div className="flex items-center w-[500px]">
        <BsSearch />
        <input
          className=" bg-[#222] w-[400px] px-[20px] text-[#fff] outline-none text-base placeholder:text-[#888] tracking-wider"
          type="text"
          value={textSearch}
          placeholder="Search razer.com"
          onChange={(e) => setTextSearch(e.target.value)}
          autoFocus
          maxLength={30}
          onKeyPress={(e) => handleSearch(e)}
        />
      </div>
      <AiOutlineClose className="cursor-pointer hover:text-[#fff]" onClick={() => setShowSearch(false)} />
    </div>
  )
}

export default SeacrhBar

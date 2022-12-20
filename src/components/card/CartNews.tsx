import React from 'react'

interface Props {
  img: string
  title: string
  description: string
}
function CartNews(props: Props) {
  const { img, title, description } = props
  return (
    <div className="relative bg-[#111] border-b-[#44d62c] border-b">
      <div
        className={`w-full h-0 pt-[100%] bg-contain bg-no-repeat bg-center`}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="p-[10px] text-lg text-white">{title}</div>
      <div className="px-[10px] min-h-[40px] text-sm text-[#888]">{description}</div>
      <button className="relative bottom-0 p-[10px] text-sm text-[#44d62c]">Learn More {'>'}</button>
    </div>
  )
}

export default CartNews

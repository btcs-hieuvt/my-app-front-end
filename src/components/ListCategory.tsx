import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { AllCategory } from '../store/Category'
import { CATEGORY } from '../types'

function ListCategory() {
  const allCategory = useRecoilValue(AllCategory)

  return (
    <>
      {allCategory.map((item: CATEGORY) => (
        <Link
          to={`${item.categoryName}`}
          className="min-w-[100px] flex flex-col hover:scale-105 hover:text-[#44d62c]"
          key={item._id}
        >
          <img src={item.image} className="w-[100px] h-[75px] object-contain" alt={item.categoryName} />
          <p className="w-[100%] text-sm mt-2 text-center">{item.categoryName}</p>
        </Link>
      ))}
    </>
  )
}

export default ListCategory

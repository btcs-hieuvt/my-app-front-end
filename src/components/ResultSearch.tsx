/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { PRODUCT } from '../types'
import { Link } from 'react-router-dom'

interface Props {
  resultSearch: PRODUCT[]
  isLoadingSearch: boolean
  handleSeemore: () => void
}

const ResultSearch = (props: Props) => {
  const { resultSearch, isLoadingSearch, handleSeemore } = props

  return (
    <div className="w-full h-full">
      <div>
        {isLoadingSearch ? (
          <div className="flex justify-center items-center p-2 min-h-[250px]">loading....</div>
        ) : (
          <div>
            {resultSearch.length ? (
              <div>
                <div className="space-y-1">
                  {resultSearch?.slice(0, 3)?.map((item) => (
                    <Link to={`/detail/${item._id}`} key={item._id}>
                      <div className="hover:bg-[#2b2b2b] cursor-pointer p-4  flex items-center space-x-3">
                        <div>
                          <img src={item.listImage[0]} alt="Image" className="w-20 h-auto shadow-md rounded-sm" />
                        </div>
                        <div>
                          <h3>{item.productName}</h3>
                          <h4>{item?.priceSale?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {resultSearch.length > 3 ? (
                  <div
                    onClick={handleSeemore}
                    className="mt-2 hover:text-white flex justify-center items-center p-2 cursor-pointer"
                  >
                    see more
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="flex justify-center items-center p-2 min-h-[250px]">no ressult</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ResultSearch

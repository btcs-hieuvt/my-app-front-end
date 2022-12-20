import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCT } from '../../types'

interface Props {
  product: PRODUCT
  stringStyle?: string
}
function CardProduct(props: Props) {
  const { product, stringStyle } = props
  const base = 10 ** 2
  let percentSale

  if (product.priceSale) {
    percentSale = ((product.price - product.priceSale) / product.price) * 100
  }
  return (
    <div className={`w-[298px] mx-2 bg-[#111] ${stringStyle} relative`}>
      {product.priceSale && (
        <div
          className="absolute top-4 left-[-6px] min-w-[80px] h-9 bg-[#28AAdc] text-black 
                    flex justify-center items-center font-bold px-4 py-1
                    after:content-[''] after:border-t-[8px] after:border-l-[8px] after:border-t-[#28AAdc] after:border-l-transparent 
                    after:absolute after:left-0 after:bottom-[-8px] after:brightness-75"
        >
          {percentSale && Math.floor(percentSale * base) / base}% OFF
        </div>
      )}
      <Link to={`/detail/${product._id}`}>
        <div
          className={`w-full h-0 pt-[100%] bg-contain bg-no-repeat bg-center`}
          style={{ backgroundImage: `url(${product.listImage[0]})` }}
        ></div>
      </Link>
      <div className="min-h-[200px] p-4 flex flex-col justify-between bg-[#222]">
        <Link to={`/detail/${product._id}`} className="text-lg">
          {product.productName}
        </Link>
        <p className="text-sm text-[#888]">{product.description}</p>
        <div className="flex justify-between">
          <div className="space-x-2">
            <span>
              {product.priceSale
                ? product.priceSale.toLocaleString('vi', { style: 'currency', currency: 'VND' })
                : product.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
            </span>
          </div>
          <Link
            to={`/detail/${product._id}`}
            className="w-12 h-6 pb-1 rounded-md font-bold flex justify-center items-center bg-[#44d62c] text-[#000]"
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardProduct

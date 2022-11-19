import React from 'react'
import { PRODUCT } from '../../types'

interface Props {
  product: PRODUCT
}
function CardProduct(props: Props) {
  const { product } = props
  return (
    <div className="w-[298px] mx-2 bg-[#111]">
      <div
        className={`w-full h-0 pt-[100%] bg-contain bg-no-repeat bg-center`}
        style={{ backgroundImage: `url(${product.listImage[0]})` }}
      ></div>
      <div className="min-h-[200px] p-4 flex flex-col justify-between bg-[#222]">
        <p className="text-lg">{product.productName}</p>
        <p className="text-sm text-[#888]">{product.description}</p>
        <div className="flex justify-between">
          <div className="space-x-2">
            <span>{product.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
            <span className="line-through text-[#888]">
              {product.priceSale
                ? product.priceSale.toLocaleString('vi', { style: 'currency', currency: 'VND' })
                : null}
            </span>
          </div>
          <button className="w-12 h-6 pb-1 rounded-md font-bold flex justify-center items-center bg-[#44d62c] text-[#000]">
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct

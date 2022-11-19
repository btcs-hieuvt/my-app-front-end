import React, { useEffect, useState } from 'react'
import CommonSlider from '../../components/slider/CommonSlider'
import { CATEGORY, PRODUCT } from '../../types'
import { Categorys } from '../../dummyData/dummyCategory'
import { dataDummy } from '../../dummyData/dummyCarousel'
import ProductSlider from '../../components/slider/ProductSlider'
import productApi from '../../api/productApi'

function StorePage() {
  const [productLatest, setProductLatest] = useState<PRODUCT[]>()
  useEffect(() => {
    const getAllProduct = async () => {
      const response = await productApi.getAll()
      const newProducts = response.map((item: PRODUCT) => {
        if (item?.createdAt) {
          return {
            ...item,
            createdAt: Number(new Date(item?.createdAt)),
          }
        }
      })

      setProductLatest(response)
    }
    getAllProduct()
  }, [setProductLatest])
  return (
    <div className="mt-[60px]">
      {/* category */}
      <div className="w-full bg-black">
        <div className="w-[1232px] mx-auto pt-10 px-4">
          <div className="h-[142px] pb-10 flex items-center justify-evenly font-sans">
            {Categorys.map((item: CATEGORY) => (
              <div className="min-w-[100px] flex flex-col hover:scale-105 hover:text-[#44d62c]" key={item.id}>
                <img src={item.image_url} className="w-[100px] h-[75px] object-contain" alt={item.title} />
                <p className="w-[100%] text-sm mt-2 text-center">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="font-bold mb-2 pt-10">
            <h1 className="text-[40px] text-[#44d62c]">THE LATEST AND GREATEST GAMING GEAR</h1>
            <p className="text-[21px]">RAZER MICE, KEYBOARDS, HEADSETS, LAPTOPS & MORE</p>
          </div>
        </div>
        <div className="pt-10 mb-6">
          <CommonSlider dataCarousel={dataDummy} />
        </div>
        <div className="w-[1232px] mx-auto">
          <ProductSlider productLatest={productLatest} />
        </div>
      </div>
    </div>
  )
}

export default StorePage

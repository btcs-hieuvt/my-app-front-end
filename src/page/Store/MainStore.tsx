import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import CommonSlider from '../../components/slider/CommonSlider'
import ProductSlider from '../../components/slider/ProductSlider'
import { dataDummy } from '../../dummyData/dummyCarousel'
import { AllProduct } from '../../store/Product'
import { PRODUCT } from '../../types'

function MainStore() {
  const [productLatest, setProductLatest] = useState<PRODUCT[]>()
  const allProduct = useRecoilValue(AllProduct)
  useEffect(() => {
    setProductLatest(allProduct.slice(-8))
  }, [allProduct, setProductLatest])
  return (
    <>
      <div className="w-[1232px] mx-auto pt-10 px-4">
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

      <div className="w-[80%] mx-auto py-10">
        <p className="w-full text-4xl text-center text-[#44d62c] pb-8 pt-4 font-bold">WHY BUY FROM RAZER.COM</p>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col  items-center">
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/first-dibs-icon.svg"
              alt="icon"
              className="w-[65px] h-[65px]"
            />
            <p className="text-[#eee] text-[28px] pt-4 pb-1 font-bold text-center">Get First Dibs</p>
            <p className="text-center text-base text-[#999]">
              Razer.com is the only place where you can buy our most anticipated Razer gear immediately upon release.
            </p>
          </div>
          <div className="flex flex-col  items-center">
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/largest-array-icon.svg"
              alt="icon"
              className="w-[65px] h-[65px]"
            />
            <p className="text-[#eee] text-[28px] pt-4 pb-1 font-bold text-center">The Largest Array Of Razer Gear</p>
            <p className="text-center text-base text-[#999]">
              As Razer’s official online store, we hold a massive collection of products that can’t be matched anywhere
              else.
            </p>
          </div>
          <div className="flex flex-col  items-center">
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/exclusives-icon.svg"
              alt="icon"
              className="w-[65px] h-[65px]"
            />
            <p className="text-[#eee] text-[28px] pt-4 pb-1 font-bold text-center">Exclusive Razer Gear And Swag</p>
            <p className="text-center text-base text-[#999]">
              Get access to limited edition Razer gear that’s only available on Razer.com.
            </p>
          </div>
          <div className="flex flex-col  items-center">
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/buynow-paylater-icon.svg"
              alt="icon"
              className="w-[65px] h-[65px]"
            />
            <p className="text-[#eee] text-[28px] pt-4 pb-1 font-bold text-center">Play Now, Pay Later</p>
            <p className="text-center text-base text-[#999]">
              With our 0% installment plan, spend more time gaming with your sweet new gear and less time fussing over
              payment.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainStore

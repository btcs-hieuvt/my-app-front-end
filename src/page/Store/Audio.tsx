import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useRecoilValue } from 'recoil'
import { productApi } from '../../api/productApi'
import CardProduct from '../../components/card/CardProduct'
import { ITEMPERPAGE } from '../../constants'
import { AUDIO } from '../../store/Product'
import { PRODUCT } from '../../types'

const itemsPerPage = ITEMPERPAGE
function Audio() {
  const listAudio = useRecoilValue(AUDIO)
  const [productAudio, setProductAudio] = useState<PRODUCT[]>()
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState<PRODUCT[]>()
  const [pageCount, setPageCount] = useState(1)
  useEffect(() => {
    let audio: PRODUCT[] = []
    listAudio.forEach(async (item) => {
      await productApi.getProductById(item).then((data) => audio.push(data))
      const newArray = [...audio]
      setProductAudio(newArray)
    })
  }, [listAudio])
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    if (productAudio) {
      const arrayCurrentItems = productAudio.slice(itemOffset, endOffset)
      setCurrentItems(arrayCurrentItems)
      const newPageCount = Math.ceil(productAudio.length / itemsPerPage)
      setPageCount(newPageCount)
    }
  }, [itemOffset, productAudio])

  const handlePageClick = (event: any) => {
    if (productAudio) {
      const newOffset = (event.selected * itemsPerPage) % productAudio.length
      setItemOffset(newOffset)
    }
  }
  return (
    <div className="w-[1232px] mx-auto pt-10 px-4">
      <div className="font-bold mb-2 pt-10">
        <h1 className="text-[40px] text-[#44d62c]">GAMING AUDIO</h1>
        <p className="text-[21px]">EXPLORE RAZER HEADSETS, WIRELESS HEADPHONES, EARPHONES FOR GAMING & BROADCASTING</p>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-4 gap-3">
          {currentItems &&
            currentItems?.map((item) => (
              <div className="col-span-1 scale-90">
                <CardProduct key={item._id} product={item} stringStyle={'rounded-md'} />
              </div>
            ))}
          {productAudio && productAudio?.length > 0 && (
            <div className="col-span-4">
              <ReactPaginate
                className="flex justify-center items-center space-x-4"
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="p-1 px-2 border rounded hover:text-[#44d62c]"
                activeClassName="text-[#44d62c]"
                disabledClassName="text-[#ccc]"
                disabledLinkClassName="cursor-default"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Audio

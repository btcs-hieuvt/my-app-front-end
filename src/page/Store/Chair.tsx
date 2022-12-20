import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useRecoilValue } from 'recoil'
import { productApi } from '../../api/productApi'
import CardProduct from '../../components/card/CardProduct'
import { ITEMPERPAGE } from '../../constants'
import { CHAIR } from '../../store/Product'
import { PRODUCT } from '../../types'

const itemsPerPage = ITEMPERPAGE
function Chair() {
  const listChair = useRecoilValue(CHAIR)
  const [productChair, setProductChair] = useState<PRODUCT[]>()
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState<PRODUCT[]>()
  const [pageCount, setPageCount] = useState(1)
  useEffect(() => {
    let chair: PRODUCT[] = []
    listChair.forEach(async (item) => {
      await productApi.getProductById(item).then((data) => chair.push(data))
      const newArray = [...chair]
      setProductChair(newArray)
    })
  }, [listChair])
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    if (productChair) {
      const arrayCurrentItems = productChair.slice(itemOffset, endOffset)
      setCurrentItems(arrayCurrentItems)
      const newPageCount = Math.ceil(productChair.length / itemsPerPage)
      setPageCount(newPageCount)
    }
  }, [itemOffset, productChair])

  const handlePageClick = (event: any) => {
    if (productChair) {
      const newOffset = (event.selected * itemsPerPage) % productChair.length
      setItemOffset(newOffset)
    }
  }
  return (
    <div className="w-[1232px] mx-auto pt-10 px-4">
      <div className="font-bold mb-2 pt-10">
        <h1 className="text-[40px] text-[#44d62c]">GAMING CHAIRS</h1>
        <p className="text-[21px]">AWARD-WINNING ERGONOMICS AND COMFORT FOR COUNTLESS HOURS OF GAMING</p>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-4 gap-3">
          {currentItems &&
            currentItems?.map((item) => (
              <div className="col-span-1 scale-90">
                <CardProduct key={item._id} product={item} stringStyle={'rounded-md'} />
              </div>
            ))}
          {productChair && productChair?.length > 0 && (
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

export default Chair

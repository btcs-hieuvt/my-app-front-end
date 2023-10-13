import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { KEYBOARDS } from '../../store/Product'
import { productApi } from '../../api/productApi'
import { PRODUCT } from '../../types'
import CardProduct from '../../components/card/CardProduct'
import ReactPaginate from 'react-paginate'
import { ITEMPERPAGE } from '../../constants'

const itemsPerPage = ITEMPERPAGE
function Keyboard() {
  const listKeyboard = useRecoilValue(KEYBOARDS)
  const [productKeyboards, setProductKeyboard] = useState<PRODUCT[]>()
  const [currentItems, setCurrentItems] = useState<PRODUCT[]>()
  const [itemOffset, setItemOffset] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  useEffect(() => {
    let keyboards: PRODUCT[] = []
    listKeyboard.forEach(async (item) => {
      await productApi.getProductById(item).then((data) => keyboards.push(data))
      const newArray = [...keyboards]
      setProductKeyboard(newArray)
    })
  }, [listKeyboard])
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    if (productKeyboards) {
      const arrayCurrentItems = productKeyboards.slice(itemOffset, endOffset)
      setCurrentItems(arrayCurrentItems)
      const newPageCount = Math.ceil(productKeyboards.length / itemsPerPage)
      setPageCount(newPageCount)
    }
  }, [itemOffset, productKeyboards])

  const handlePageClick = (event: any) => {
    if (productKeyboards) {
      const newOffset = (event.selected * itemsPerPage) % productKeyboards.length
      setItemOffset(newOffset)
    }
  }
  return (
    <>
      <div className="w-[1232px] mx-auto pt-10 px-4">
        <div className="font-bold mb-2 pt-10">
          <h1 className="text-[40px] text-[#44d62c]">GAMING KEYBOARDS</h1>
          <p className="text-[21px]">FULL-SIZED, TENKEYLESS, AND 60% KEYBOARDS</p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-3">
            {currentItems &&
              currentItems?.map((item) => (
                <div className="col-span-1 scale-90">
                  <CardProduct key={item._id} product={item} stringStyle={'rounded-md'} />
                </div>
              ))}
            {productKeyboards && productKeyboards?.length > 0 && (
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
    </>
  )
}

export default Keyboard

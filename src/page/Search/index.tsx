import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCT } from '../../types'
import { searchApi } from '../../api/searchApi'
import ReactPaginate from 'react-paginate'
import CardProduct from '../../components/card/CardProduct'

const itemsPerPage = 8
function SearchPage() {
  const { slug } = useParams()

  const [dataResultSeacrh, setDataResultSearch] = useState<PRODUCT[]>([])
  const [currentItems, setCurrentItems] = useState<PRODUCT[]>()
  const [loadingsearch, setLoadingSearch] = useState<boolean>(false)
  const [itemOffset, setItemOffset] = useState(0)
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    const handleSearch = async () => {
      if (slug?.trim()) {
        setLoadingSearch(true)
        await searchApi
          .search(slug)
          .then((data) => {
            if (data) {
              setLoadingSearch(false)
              setDataResultSearch(data as PRODUCT[])
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err)
            setLoadingSearch(false)
          })
      } else {
        setDataResultSearch([])
      }
    }
    handleSearch()
  }, [slug])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    if (dataResultSeacrh) {
      const arrayCurrentItems = dataResultSeacrh.slice(itemOffset, endOffset)
      setCurrentItems(arrayCurrentItems)
      const newPageCount = Math.ceil(dataResultSeacrh.length / itemsPerPage)
      setPageCount(newPageCount)
    }
  }, [itemOffset, dataResultSeacrh])

  const handlePageClick = (event: any) => {
    if (dataResultSeacrh) {
      const newOffset = (event.selected * itemsPerPage) % dataResultSeacrh.length
      setItemOffset(newOffset)
    }
  }

  return (
    <div className="min-h-[65vh] pt-16 w-[1200px] mx-auto mb-[50px]">
      <div className="mt-[30px]">SearchPage result for "{slug}"</div>

      {loadingsearch ? (
        <div>Loading....</div>
      ) : (
        <div className="grid grid-cols-4 gap-3">
          {currentItems &&
            currentItems?.map((item) => (
              <div className="col-span-1 scale-90">
                <CardProduct key={item._id} product={item} stringStyle={'rounded-md'} />
              </div>
            ))}
          {dataResultSeacrh && dataResultSeacrh?.length > 0 && (
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
      )}
    </div>
  )
}

export default SearchPage

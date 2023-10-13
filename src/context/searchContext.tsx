import React, { useState, createContext, ReactNode, useContext, useEffect } from 'react'
import useDebounce from '../hooks/useDebounce'
import { searchApi } from '../api/searchApi'
import { PRODUCT } from '../types'

interface ContextData {
  textSearch: string
  setTextSearch: React.Dispatch<React.SetStateAction<string>>
  dataResultSeacrh: PRODUCT[]
  loadingsearch: boolean
}
const SearchContext = createContext<ContextData | undefined>(undefined)

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [textSearch, setTextSearch] = useState<string>('')
  const debounceSearchText = useDebounce(textSearch, 500)

  const [dataResultSeacrh, setDataResultSearch] = useState<PRODUCT[]>([])
  const [loadingsearch, setLoadingSearch] = useState<boolean>(false)

  useEffect(() => {
    const handleSearch = async () => {
      if (debounceSearchText.trim()) {
        setLoadingSearch(true)
        await searchApi
          .search(debounceSearchText)
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
  }, [debounceSearchText])

  const value = {
    textSearch,
    setTextSearch,
    dataResultSeacrh,
    loadingsearch,
  }

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export const useSearch = () => {
  const data = useContext(SearchContext)

  if (!data) {
    throw new Error('error context')
  }

  return data
}

export default SearchContextProvider

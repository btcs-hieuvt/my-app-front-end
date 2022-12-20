/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AllCategory } from '../store/Category'
import { AUDIO, CHAIR, CONSOLE, KEYBOARDS, MICE } from '../store/Product'

function useGetProductsByCategory() {
  const setListKeyboard = useSetRecoilState(KEYBOARDS)
  const setListMice = useSetRecoilState(MICE)
  const setListAudio = useSetRecoilState(AUDIO)
  const setListChair = useSetRecoilState(CHAIR)
  const setListConsole = useSetRecoilState(CONSOLE)
  const allCategory = useRecoilValue(AllCategory)
  useEffect(() => {
    allCategory.forEach((category) => {
      switch (category.categoryName) {
        case 'Keyboard':
          category.products && setListKeyboard(category.products)
          break
        case 'Mice':
          category.products && setListMice(category.products)
          break
        case 'Audio':
          category.products && setListAudio(category.products)
          break
        case 'Chair':
          category.products && setListChair(category.products)
          break
        case 'Console':
          category.products && setListConsole(category.products)
          break
      }
    })
  }, [allCategory])
}

export default useGetProductsByCategory

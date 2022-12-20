import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { categoryApi } from '../api/categoryApi'
import { AllCategory } from '../store/Category'

function useGetAllCateGory() {
  const setAllCategory = useSetRecoilState(AllCategory)
  useEffect(() => {
    const getAllCategory = async () => {
      await categoryApi.getAll().then((response) => {
        setAllCategory(response)
      })
    }
    getAllCategory()
  }, [setAllCategory])
}

export default useGetAllCateGory

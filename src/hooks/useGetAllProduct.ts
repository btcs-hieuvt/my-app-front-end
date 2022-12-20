import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { productApi } from '../api/productApi'
import { AllProduct } from '../store/Product'
import { PRODUCT } from '../types'

function useGetAllProduct() {
  const setAllProduct = useSetRecoilState<PRODUCT[]>(AllProduct)

  useEffect(() => {
    const getAllProduct = async () => {
      await productApi.getAll().then((response: PRODUCT[]) => {
        setAllProduct(response)
      })
    }
    getAllProduct()
  }, [setAllProduct])
}

export default useGetAllProduct

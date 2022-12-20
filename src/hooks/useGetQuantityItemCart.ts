import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { CART, QuantityItems } from '../store/Cart'

function useGetQuantityItemCart() {
  const cartItems = useRecoilValue(CART)
  const setQuantityItemInCart = useSetRecoilState(QuantityItems)

  useEffect(() => {
    let totalItem = 0
    cartItems.length > 0 &&
      cartItems.forEach((item) => {
        totalItem = totalItem + item.quantity
      })
    setQuantityItemInCart(totalItem)
  }, [cartItems, setQuantityItemInCart])
}

export default useGetQuantityItemCart

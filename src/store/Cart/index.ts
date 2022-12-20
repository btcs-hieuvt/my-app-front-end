import { atom } from 'recoil'
// import { PRODUCT } from '../../types'
import { CartItem } from '../../types/cart'

export const CART = atom<CartItem[]>({
  key: 'CART_ITEMS',
  default: [],
})
export const QuantityItems = atom<number>({
  key: 'QUANTITY_CART',
  default: 0,
})
export const getItemQuantityCart = (cartItems: CartItem[], id: string) => {
  return cartItems.find((item) => item._id === id)?.quantity || 0
}

export const handleIncreaseCartQuantity = (currItems: CartItem[], id: string) => {
  const newArray = [...currItems]
  if (newArray.find((item) => item._id === id) === undefined) {
    newArray.push({ _id: id, quantity: 1 })
  } else {
    return currItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
  }
  return newArray
}

export const handleDecreaseCartQuantity = (currItems: CartItem[], id: string) => {
  const newArray = [...currItems]
  if (newArray.find((item) => item._id === id)?.quantity === 1) {
    return newArray.filter((item) => item._id !== id)
  } else {
    return newArray.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return item
      }
    })
  }
}
export const removeFromCart = (currItems: CartItem[], id: string) => {
  return currItems.filter((item) => item._id !== id)
}

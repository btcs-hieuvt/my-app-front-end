import { useRecoilState, useRecoilValue } from 'recoil'
import CardItemCart from '../../components/card/CardItemCart'
import {
  CART,
  handleDecreaseCartQuantity,
  handleIncreaseCartQuantity,
  QuantityItems,
  removeFromCart,
} from '../../store/Cart'

function Cart() {
  const [carItems, setCartItems] = useRecoilState(CART)
  const quantityItemsInCart = useRecoilValue(QuantityItems)
  const increaseCartQuantity = (id: string) => {
    const newCart = [...carItems]
    const newArray = handleIncreaseCartQuantity(newCart, id as string)
    setCartItems(newArray)
  }
  const decreaseCartQuantity = (id: string) => {
    const newCart = [...carItems]
    const newArray = handleDecreaseCartQuantity(newCart, id as string)
    setCartItems(newArray)
  }
  const removeItemFromCart = (id: string) => {
    const newCart = [...carItems]
    const newArray = removeFromCart(newCart, id as string)
    setCartItems(newArray)
  }
  return (
    <div className="mt-[60px] mb-10 w-full mx-auto">
      {carItems.length > 0 ? (
        <div className="flex flex-col items-center">
          <div className="bg-[#555] h-11 w-full flex justify-center items-center">
            <p className="text-xl w-[1144px] ">
              Cart <span className="text-sm"> ({quantityItemsInCart} item)</span>
            </p>
          </div>
          <div className="w-[1144px] py-6">
            {carItems.map((item) => (
              <CardItemCart
                key={item._id}
                item={item}
                increaseCartQuantity={increaseCartQuantity}
                decreaseCartQuantity={decreaseCartQuantity}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full min-h-[260px] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[21px] text-center mb-2">Your cart is empty</p>
            <p className="w-[240px] text-center text-sm text-[#999] mb-8">
              Fear not ,have a look at our latest products and start shopping
            </p>
            <button className="h-10 px-6 py-3 text-black bg-[#44d62c] text-sm font-bold rounded-md">
              SHOP RAZER.COM
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart

import { useEffect, useState } from 'react'
import { CartItem } from '../../types/cart'
import { productApi } from '../../api/productApi'
import { PRODUCT } from '../../types'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai'

interface Props {
  item: CartItem
  increaseCartQuantity: (id: string) => void
  decreaseCartQuantity: (id: string) => void
  removeItemFromCart: (id: string) => void
}
function CardItemCart(props: Props) {
  const { item, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = props
  const [product, setProduct] = useState<PRODUCT>()

  let total
  if (product?.priceSale) {
    total = product?.priceSale * item.quantity
  } else {
    total = product?.price && product?.price * item.quantity
  }

  console.log(total)

  useEffect(() => {
    const getDetailProduct = async () => {
      await productApi
        .getProductById(item._id as string)
        .then((data) => setProduct(data))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    }
    getDetailProduct()
  }, [item])
  return (
    <div className=" grid grid-cols-6 mb-2">
      <div className="col-span-1">
        {' '}
        <div
          className={`w-full h-0 pt-[100%] bg-contain bg-inherit bg-no-repeat bg-center`}
          style={{ backgroundImage: `url(${product && product.listImage[0]})` }}
        ></div>
      </div>
      <div className="col-span-3 border-b border-b-[#222] text-lg ">
        <p>{product?.productName}</p>
        <p className="text-sm text-[#999]">{product?.description}</p>
      </div>
      <div className="col-span-1 border-b border-b-[#222]">
        <div className="w-14 flex justify-between items-center">
          <button onClick={() => decreaseCartQuantity(item._id as string)}>
            <AiOutlineMinusSquare className="text-xl text-[#44d62c]" />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseCartQuantity(item._id as string)}>
            <AiOutlinePlusSquare className="text-xl text-[#44d62c]" />
          </button>
        </div>
        <button onClick={() => removeItemFromCart(item._id as string)} className="hover:underline text-[#999]">
          Remove
        </button>
      </div>
      <div className="col-span-1 border-b border-b-[#222] float-right">
        {total && total.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
      </div>
    </div>
  )
}

export default CardItemCart

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { productApi } from '../../api/productApi'
import { CART, handleIncreaseCartQuantity } from '../../store/Cart'
import { PRODUCT } from '../../types'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<PRODUCT>()
  const [imagePreview, setImagePreview] = useState<String>()
  const [cartItems, setCartItems] = useRecoilState(CART)

  const addToCart = (id: string) => {
    const newCart = [...cartItems]
    const newArray = handleIncreaseCartQuantity(newCart, id as string)
    setCartItems(newArray)
  }

  useEffect(() => {
    const getData = async () => {
      id &&
        (await productApi
          .getProductById(id)
          .then((data) => {
            setProduct(data)
            setImagePreview(data.listImage[0])
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err)
          }))
    }
    getData()
  }, [id])

  return (
    <div className="mt-[60px] py-6 bg-black">
      <div className="grid grid-cols-4 space-x-6 ">
        <div className="col-span-3 w-full h-[760px]">
          <div
            className="w-full h-full relative flex justify-center bg-center bg-no-repeat items-center bg-[#222]"
            style={{ backgroundImage: `url(${imagePreview})` }}
          >
            <div className="flex flex-col absolute top-[50%] left-10 translate-y-[-50%] space-y-5">
              {product?.listImage.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[78px] h-0 pt-[100%] bg-cover bg-no-repeat bg-center border bg-[#161515a2] ${
                      item === imagePreview ? 'border-[#44d62c]' : ''
                    }`}
                    style={{ backgroundImage: `url(${item})` }}
                    onClick={() => setImagePreview(item)}
                  ></div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#000]">
          <div className="pt-[40px] pr-[30px] pl-[16px]">
            <p className="text-[#44d52c] text-lg">{product?.productName}</p>
            <p className="text-base my-2">{product?.description}</p>
            <div className="flex flex-col space-y-2 text-xl">
              <span>{product?.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
              {product?.priceSale && (
                <span className="text-[#ccc] text-sm line-through">
                  {product.priceSale.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                </span>
              )}
            </div>
          </div>

          <div className="mt-9 pr-[30px] pl-[16px]">
            <div className="flex items-center">
              {/* <CiDeliveryTruck className="text-2xl text-[#44d52c] font-semibold" /> */}
              <span className="mx-2">Order now</span>
            </div>
            <button
              className="w-full h-[40px] bg-[#44d52c] rounded-md my-6 text-[#000] font-semibold hover:bg-[#92f880]"
              onClick={() => addToCart(id as string)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

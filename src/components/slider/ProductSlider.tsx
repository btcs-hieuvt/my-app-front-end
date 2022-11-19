import Slider from 'react-slick'
import CardProduct from '../card/CardProduct'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PRODUCT } from '../../types'

interface Props {
  productLatest: PRODUCT[] | undefined
}
function ProductSlider(props: Props) {
  const { productLatest } = props
  const setting = {
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    infinite: false,
  }
  return (
    <div className="w-full mx">
      <Slider {...setting}>
        {productLatest?.map((item) => (
          <CardProduct product={item} />
        ))}
      </Slider>
    </div>
  )
}

export default ProductSlider

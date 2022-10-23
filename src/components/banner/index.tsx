import { SIZE } from '../../enum'

interface Props {
  title: string
  description: string
  img: string
  textSize?: SIZE
  stringStyle?: string
}
function Banner(props: Props) {
  const { title, description, img, stringStyle, textSize } = props

  return (
    <div>
      <div
        className={`w-full text-white h-[700px]  ${stringStyle} bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center' }}
      >
        <div className=" w-full flex items-center flex-col">
          <h1
            className={`${textSize === SIZE.BIG && 'text-[3.5rem]'} ${textSize === SIZE.MEDIUM && 'text-[2.5rem]'}
pt-12 tracking-wide font-semibold text-center w-[80%]`}
          >
            {title}
          </h1>
          <p
            className={`${textSize === SIZE.BIG && 'text-[1.75rem]'} ${textSize === SIZE.MEDIUM && 'text-[1.313rem]'}`}
          >
            {description}
          </p>
        </div>
        <div
          className={`${textSize === SIZE.BIG && 'text-xl'} ${
            textSize === SIZE.MEDIUM && 'text-[1.0625rem]'
          } w-full pt-2 flex justify-center items-center`}
        >
          <p className="mx-2 hover:underline cursor-pointer">Learn More</p>{' '}
          <span className="text-[#44d62c]">{'>'}</span>
        </div>
      </div>
    </div>
  )
}

export default Banner

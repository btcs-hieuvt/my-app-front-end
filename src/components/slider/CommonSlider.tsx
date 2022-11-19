import Carousel from 'react-material-ui-carousel'
import { CAROUSEL } from '../../types'

interface Props {
  dataCarousel: any
}
function CommonSlider(props: Props) {
  const { dataCarousel } = props
  return (
    <div className="w-full">
      <Carousel
        animation="fade"
        duration={800}
        className="pb-8"
        fullHeightHover={false}
        navButtonsProps={{
          style: {
            backgroundColor: '#44d62c',
            borderRadius: 0,
          },
        }}
        autoPlay={true}
        swipe={true}
        indicators={true}
        indicatorContainerProps={{
          style: {
            zIndex: 1,
            marginTop: '-50px',
            position: 'relative',
            width: '300px',
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'space-evenly',
          },
        }}
        indicatorIconButtonProps={{
          style: {
            width: '12px',
            height: '12px',
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: '#44d62c',
          },
        }}
      >
        {dataCarousel.map((data: CAROUSEL) => (
          <div
            key={data.id}
            className="w-full h-[400px] flex items-center justify-end px-7"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundPosition: 'center',
            }}
          >
            <div className="w-[1200px] mx-auto">
              <div className="w-[372px] float-right pr-6 font-light">
                <h1 className="text-[28px] text-[#999] my-4">{data.title}</h1>
                <p className="text-lg text-[#999]">{data.description}</p>
                <p className="my-4 text-[#44d62c]">{'Learn More >'}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CommonSlider

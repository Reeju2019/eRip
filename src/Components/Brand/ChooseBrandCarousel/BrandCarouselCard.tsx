import * as React from 'react'
import './ChooseBrandCarousel.css'

interface IBrandCarouselCardProps {
  data: {
    brandName: string
    image: string
  }
}

const BrandCarouselCard: React.FunctionComponent<IBrandCarouselCardProps> = (data) => {
  return (
    <>
      <div>
        <div className='image-containers'>
          <img src={data.data.image} className='image-cbs' alt={data.data.brandName} />
        </div>
      </div>
    </>
  )
}

export default BrandCarouselCard

import * as React from 'react'

interface IModelCarouselCardProps {
  data: {
    model: string
    image: string
  }
}

const ModelCarouselCard: React.FunctionComponent<IModelCarouselCardProps> = ({ data }) => {
  return (
    <>
      <div className='d-flex flex-column m-2'>
        <div className='p-2 bg-white'>
          <div className='service-img'>
            <img
              src={data.image}
              className='images d-flex justify-content-center'
              alt={data.model}
            />
          </div>
        </div>
        <p className='service-para'>{data.model}</p>
      </div>
    </>
  )
}

export default ModelCarouselCard

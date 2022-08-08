import * as React from 'react'

interface IServiceHilightsCardProps {
  item: {
    title: string
    text: string
    image: string
  }
}

const ServiceHilightsCard: React.FunctionComponent<IServiceHilightsCardProps> = ({ item }) => {
  return (
    <>
      <div className='d-flex flex-row divContainer p-2 my-4'>
        <div>
          <img src={item.image} className='itemImg' alt='itemImg' />
        </div>
        <div className='p-2'>
          <h6>{item.title}</h6>
          <p className='itemPara'>{item.text}</p>
        </div>
      </div>
    </>
  )
}

export default ServiceHilightsCard

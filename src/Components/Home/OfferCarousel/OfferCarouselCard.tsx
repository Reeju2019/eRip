import { Image } from 'react-bootstrap'

interface Item {
  data: string
}

const OfferCarouselCard: React.FunctionComponent<Item> = (data) => {
  return (
    <>
      <div>
        <Image src={data.data} className='d-block h-100 w-auto' alt={data.data} />
      </div>
    </>
  )
}

export default OfferCarouselCard

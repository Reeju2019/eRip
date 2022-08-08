import { useEffect, useState } from 'react'

interface ICartPreviewCardProps {
  item: {
    serviceImage: string
    service_name: string
    price: number
    off: number
    repairTime: string
    warranty: string
    repairType: string
  }
}

const CartPreviewCard: React.FunctionComponent<ICartPreviewCardProps> = (props) => {
  const item = props
  const [model, setModel] = useState<string | null>(null)
  useEffect(() => {
    const singleModel = localStorage.getItem('Model') as string
    setModel(JSON.parse(singleModel))
  }, [])
  return (
    <>
      <div className='my-3 d-flex flex-row justify-content-between text-muted lh-1'>
        <p className='m-0'>
          {model} - {item.item.service_name}
        </p>
        <p className='m-0 text-primary'>₹ {item.item.price}</p>
      </div>
      <hr className='m-0' />
    </>
  )
}

export default CartPreviewCard

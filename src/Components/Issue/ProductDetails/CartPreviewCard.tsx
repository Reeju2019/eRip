interface ICartPreviewCardProps {
  item: {
    model?: string
    serviceImage: string
    serviceName: string
    price: number
    off: number
    repairTime: string
    warranty: string
    repairType: string
  }
}

const CartPreviewCard: React.FunctionComponent<ICartPreviewCardProps> = (props) => {
  const item = props
  return (
    <>
      <div className='my-3 d-flex flex-row justify-content-between text-muted lh-1'>
        <p className='m-0'>
          {item.item.model} - {item.item.serviceName}
        </p>
        <p className='m-0 text-primary'>₹ {item.item.price}</p>
      </div>
      <hr className='m-0' />
    </>
  )
}

export default CartPreviewCard

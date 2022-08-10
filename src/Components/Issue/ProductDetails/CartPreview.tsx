import { Button, Col, Container, Row } from 'react-bootstrap'
import CartPreviewCard from './CartPreviewCard'
import IssueData from '../../../Data/IssuePage.mock.json'

interface ICartPreview {
  cartItem:
    | {
        serviceImage: string
        service_name: string
        price: number
        off: number
        repairTime: string
        warranty: string
        repairType: string
      }[]
    | undefined
}

const CartPreview: React.FunctionComponent<ICartPreview> = (props) => {
  const cartItem = props
  // console.log(props.cartItem)
  const totalDiscount = (allItem: ICartPreview) => {
    let discount = 0
    allItem.cartItem?.map((item) => {
      const offer = (item.price * item.off) / 100
      discount += offer
      Math.ceil(offer)
    })
    return Math.ceil(discount)
  }
  const totalAmount = (allItem: ICartPreview) => {
    // console.log(allItem)
    let total = 0
    allItem.cartItem?.map((item) => {
      total += item.price
    })
    return total
  }
  // const totalDisc = (allItem: ICartPreview) => {
  //   const totalD =
  //   // 2000 -- 100
  //   // 1 --- 100/2000
  //   // 1800 -- 100/2000*1800
  // }

  return (
    <>
      <Container fluid className='w-100 mx-1'>
        <Row>
          <Col className='bg-white mt-0 p-5'>
            <h5>{IssueData.constData.cartPreview.heading}</h5>
            <hr />
            <div>
              {cartItem &&
                cartItem.cartItem?.map((item, index) => {
                  return (
                    <div key={index}>
                      <CartPreviewCard item={item} />
                    </div>
                  )
                })}
            </div>
            <div>
              <div className='my-3 d-flex flex-row justify-content-between lh-1'>
                <p className='m-0'>
                  {IssueData.constData.cartPreview.youSaved}
                  <span className='text-success'>
                    {' '}
                    (
                    {Math.floor((totalDiscount(cartItem) * 100) / totalAmount(cartItem))
                      ? Math.floor((totalDiscount(cartItem) * 100) / totalAmount(cartItem))
                      : 0}
                  </span>
                  <span className='text-success'>%)</span>
                </p>
                <p className='m-0 text-primary'>₹ {totalDiscount(cartItem)}</p>
              </div>
              <hr className='m-0' />
            </div>
            <div>
              <div className='my-3 d-flex flex-row justify-content-between lh-1'>
                <p className='m-0'>{IssueData.constData.cartPreview.totalAmount}</p>
                <p className='m-0 text-primary'>
                  ₹ {totalAmount(cartItem) - totalDiscount(cartItem)}
                </p>
              </div>
              <hr className='m-0' />
            </div>

            <Row className='px-2 mt-5'>
              <Button>{IssueData.constData.cartPreview.bookNow}</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartPreview

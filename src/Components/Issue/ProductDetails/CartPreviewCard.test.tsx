import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import CartPreviewCard from './CartPreviewCard'

interface Data {
    model?: string
    serviceImage: string
    serviceName: string
    price: number
    off: number
    repairTime: string
    warranty: string
    repairType: string
}
const data: Data = {
    model: "",
    serviceImage: "",
    serviceName: "",
    price: 0,
    off: 0,
    repairTime: "",
    warranty: "",
    repairType: ""
}

test('cart preview card', () => {
  render(<CartPreviewCard item={data}/>)
})
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<CartPreviewCard item={data} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<CartPreviewCard item={data} />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import RepairServiceCard from './RepairServiceCard'

interface SingleService {
  model?: string
  serviceImage: string
  serviceName: string
  price: number
  off: number
  repairTime: string
  warranty: string
  repairType: string
}

interface Service {
  model?: string
  serviceImage: string
  serviceName: string
  price: number
  off: number
  repairTime: string
  warranty: string
  repairType: string
}

const service: Service = {
  model: "",
  serviceImage: "",
  serviceName: "",
  price: 0,
  off: 0,
  repairTime: "",
  warranty: "",
  repairType: ""
}

const cartitem: SingleService[] = []

const setcartitem= jest.fn()

test('repair service card', () => {
  render(<RepairServiceCard service={service} cartitem={cartitem} setcartitem={setcartitem} />)
})
describe('repair service card rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<RepairServiceCard service={service} cartitem={cartitem} setcartitem={setcartitem} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing repair service card', () => {
    const div = document.createElement('div')
    render(<RepairServiceCard service={service} cartitem={cartitem} setcartitem={setcartitem} />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

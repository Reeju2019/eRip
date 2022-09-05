import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import CartPreview from './CartPreview'
interface ICartPreview {
  cartitem:

    | {
        model?: string
        serviceImage: string
        serviceName: string
        price: number
        off: number
        repairTime: string
        warranty: string
        repairType: string
      }[]
    | undefined
}

const data : ICartPreview["cartitem"] = [{

        model: "string",
        serviceImage: "string",
        serviceName: "string",
        price: 2,
        off: 5,
        repairTime: "",
        warranty: "string",
        repairType: "string",
}]

test('cart preview', () => {
  render(<CartPreview cartitem={data} />)
})
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<CartPreview cartitem={data}/>)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<CartPreview cartitem={data}/>)
    ReactDOM.unmountComponentAtNode(div)
  })
})

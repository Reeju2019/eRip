import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import OrderCard from './OrderCard'


interface Data {
    order_id: string
    time: string
    device: string
    issue: string
    order_status: string
    image: string
}
const data: Data = {
    order_id: "",
    time: "",
    device: "",
    issue: "",
    order_status: "",
    image: "",
}

test('order card', () => {
  render(<OrderCard item={data}/>)
})
describe('order card rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<OrderCard item={data}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing order card', () => {
    const div = document.createElement('div')
    render(<OrderCard item={data}/>)
    ReactDOM.unmountComponentAtNode(div)
  })
})

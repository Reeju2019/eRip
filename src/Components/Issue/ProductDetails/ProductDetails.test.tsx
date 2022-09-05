import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ProductDetails from './ProductDetails'

test('product details', () => {
  render(<ProductDetails />)
})
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<ProductDetails />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<ProductDetails />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

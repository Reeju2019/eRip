import { render } from '@testing-library/react'
import BrandCard from './BrandCard'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'

interface Brand {
  brandName: string
  image: string
}
const brand: Brand = {
  brandName: 'apple',
  image: '',
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<BrandCard brand={brand} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<BrandCard brand={brand} />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

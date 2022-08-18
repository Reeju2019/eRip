import { render } from '@testing-library/react'
import BrandCarouselCard from './BrandCarouselCard'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'

interface Data {
  brandName: string
  image: string
}
const data: Data = {
  brandName: '',
  image: '',
}

test('choose brand card', () => {
  render(<BrandCarouselCard data={data} />)
})
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<BrandCarouselCard data={data} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<BrandCarouselCard data={data} />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

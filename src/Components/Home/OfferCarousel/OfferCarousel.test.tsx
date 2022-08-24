import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import OfferCarouselCard from './OfferCarouselCard'

interface item {
  imageName: string
  image: string
}
const Data: item = {
  imageName: 'string',
  image: 'cdf/ded/new',
}

test('offer carousel', () => {
  render(<OfferCarouselCard data={Data.image} />)
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<OfferCarouselCard data={Data.image} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<OfferCarouselCard data={Data.image} />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import OfferCarouselCard from './OfferCarouselCard'

test('offer carousel', () => {
  render(<OfferCarouselCard />)
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<OfferCarouselCard />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<OfferCarouselCard />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

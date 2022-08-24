import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import OfferCarouselCard from './OfferCarouselCard'

const data ="a"

test('offer carousel', () => {
  render(<OfferCarouselCard data={data}/>)
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<OfferCarouselCard data={data}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<OfferCarouselCard data={data}/>)
    ReactDOM.unmountComponentAtNode(div)
  })
})

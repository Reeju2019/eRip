import { render } from '@testing-library/react'
import BrandCarouselCard from './BrandCarouselCard'
import renderer from 'react-test-renderer'

test('choose brand card', () => {
  render(<BrandCarouselCard />)
})
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))
describe('App rendering specification', () => {
    it('SnapShot testing', () => {
      const component = renderer.create(<BrandCarouselCard />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      
    });
})

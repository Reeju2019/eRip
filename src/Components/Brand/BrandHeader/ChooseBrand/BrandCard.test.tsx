import { render } from '@testing-library/react'
import BrandCard from './BrandCard'
import renderer from 'react-test-renderer'


test('brand card', () => {
  render(<BrandCard />)
})

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
  }))

describe('App rendering specification', () => {
    it('SnapShot testing', () => {
      const component = renderer.create(<BrandCard />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      
    });
})


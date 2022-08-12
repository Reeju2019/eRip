import { render } from '@testing-library/react'
import BrandCard from './BrandCard'
import renderer from 'react-test-renderer'
interface Brand {
  brandName: string
  image: string
}
const brand:Brand[] = [{
  brandName:"",
  image:""
}]
test('brand card', () => {
  render(<BrandCard brand={brand}/>)
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


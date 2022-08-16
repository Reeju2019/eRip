import { render, screen } from "@testing-library/react"
import BrandHeader from "./BrandHeader"
import renderer from 'react-test-renderer'

test('brand header', () => {
    render(<BrandHeader />)
  })

  describe('App rendering specification', () => {
    it('SnapShot testing', () => {
      const component = renderer.create(<BrandHeader />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      
    });
})
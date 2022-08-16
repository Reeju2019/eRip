import { render, screen } from '@testing-library/react'
import ChooseBrandCarousel from './ChooseBrandCarousel'
import renderer from 'react-test-renderer'

test('choose brand carousel', () => {
  render(<ChooseBrandCarousel />)
})


describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<ChooseBrandCarousel />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    
  });
})


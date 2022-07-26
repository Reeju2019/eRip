import { render, screen } from '@testing-library/react'
import ChooseBrandCarousel from './ChooseBrandCarousel'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'

test('choose brand carousel', () => {
  render(<ChooseBrandCarousel />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<ChooseBrandCarousel />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<ChooseBrandCarousel />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

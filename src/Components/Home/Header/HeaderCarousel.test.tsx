import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import HeaderCarousel from './HeaderCarousel'

test('header carousel', () => {
  render(<HeaderCarousel />)
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<HeaderCarousel />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<HeaderCarousel />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
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
<<<<<<< HEAD
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<ChooseBrandCarousel />)
    ReactDOM.unmountComponentAtNode(div)
  })
=======
>>>>>>> cb5880a93c98ef130e6353a40a30f7c7065eaaff
})

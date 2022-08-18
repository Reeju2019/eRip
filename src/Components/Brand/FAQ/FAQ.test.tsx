import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import FAQ from './FAQ'

test('FAQ', () => {
  render(<FAQ />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<FAQ />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<FAQ />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

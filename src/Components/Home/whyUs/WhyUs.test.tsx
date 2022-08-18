import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import WhyUs from './WhyUs'

test('why us', () => {
  render(<WhyUs />)
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<WhyUs />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<WhyUs />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import HowItWorks from './HowItWork'

test('how it works', () => {
  render(<HowItWorks />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<HowItWorks />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<HowItWorks />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

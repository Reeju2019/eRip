import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ServiceIssue from './ServiceIssue'

test('service issue', () => {
  render(<ServiceIssue />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<ServiceIssue />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<ServiceIssue />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import NewsAndUpdates from './NewsAndUpdates'

test('news and updates', () => {
  render(<NewsAndUpdates />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<NewsAndUpdates />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<NewsAndUpdates />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

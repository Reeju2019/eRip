import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import NewsAndUpdatesCard from './NewsAndUpdatesCard'

test('news and update card', () => {
  render(<NewsAndUpdatesCard />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<NewsAndUpdatesCard />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<NewsAndUpdatesCard />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import News from './News'
import { MemoryRouter as Router } from 'react-router-dom'

test('news', () => {
  render(
    <Router>
      <News />
    </Router>,
  )
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(
      <Router>
        <News />
      </Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(
      <Router>
        <News />
      </Router>,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

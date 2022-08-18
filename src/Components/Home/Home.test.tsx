import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Home from './Home'
import { MemoryRouter as Router } from 'react-router-dom'

test('home', () => {
  render(
    <Router>
      <Home />
    </Router>,
  )
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(
      <Router>
        <Home />
      </Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(
      <Router>
        <Home />
      </Router>,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

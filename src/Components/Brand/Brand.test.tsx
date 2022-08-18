import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Brand from './Brand'
import { MemoryRouter as Router } from 'react-router-dom'

test('brand', () => {
  render(
    <Router>
      <Brand />
    </Router>,
  )
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(
      <Router>
        <Brand />
      </Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(
      <Router>
        <Brand />
      </Router>,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

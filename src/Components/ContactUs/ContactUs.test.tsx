import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import ContactUs from './ContactUS'
import { MemoryRouter as Router } from 'react-router-dom'

describe('App rendering specification', () => {
  test('contact us', () => {
    render(
      <Router>
        <ContactUs />
      </Router>,
    )
  })
  it('SnapShot testing', () => {
    const component = renderer.create(
      <Router>
        <ContactUs />
      </Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(
      <Router>
        <ContactUs />
      </Router>,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

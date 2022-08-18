import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Header from './Header'
import { MemoryRouter as Router } from 'react-router-dom'

test('header', () => {
  render(
    <Router>
      <Header />
    </Router>,
  )
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(
      <Router>
        <Header />
      </Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(
      <Router>
        <Header />
      </Router>,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

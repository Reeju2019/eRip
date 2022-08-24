import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import IssueHeader from './IssueHeader'
import { MemoryRouter as Router } from 'react-router-dom'

test('issue Header', () => {
  render(
    <Router>
      <IssueHeader />
    </Router>,
  )
})
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(
      <Router>
        <IssueHeader />
      </Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(
      <Router>
        <IssueHeader />
      </Router>,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

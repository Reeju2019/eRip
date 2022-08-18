import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Getfix from './Get-fix'

test('get fix', () => {
  render(<Getfix />)
  const linkElement = screen.getByText(/Mobile/i)
  expect(linkElement).toBeInTheDocument()
})

describe('pnf rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<Getfix />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<Getfix />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

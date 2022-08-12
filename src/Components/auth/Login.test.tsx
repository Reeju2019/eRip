import { render, screen } from '@testing-library/react'
import Login from './Login'
import renderer from 'react-test-renderer'

test('auth login', () => {
  render(<Login />)
  const linkElement = screen.getByText(/Modal body text goes here./i)
  expect(linkElement).toBeInTheDocument()
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<Login/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    
  });
})

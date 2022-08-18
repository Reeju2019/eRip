import React from 'react'
import { render, screen } from '@testing-library/react'
import ChooseBrand from './ChooseBrand'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'

test('choose brand', () => {
  render(<ChooseBrand />)
  //   const linkElement = screen.getByText(/Bengaluru/i)
  //   expect(linkElement).toBeInTheDocument()
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<ChooseBrand/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<ChooseBrand />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

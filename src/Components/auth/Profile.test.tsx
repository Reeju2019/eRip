import { render, screen } from '@testing-library/react'
import Profile from './Profile'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'

test('auth profile', () => {
  render(<Profile />)
})

describe('App rendering specification', () => {
<<<<<<< HEAD
    it('SnapShot testing', () => {
      const component = renderer.create(<Profile/>)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      
    })
    it('render without crashing', () => {
      const div = document.createElement('div')
      render(<Profile />)
      ReactDOM.unmountComponentAtNode(div)
    })
=======
  it('SnapShot testing', () => {
    const component = renderer.create(<Profile />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
>>>>>>> cb5880a93c98ef130e6353a40a30f7c7065eaaff
  })
})

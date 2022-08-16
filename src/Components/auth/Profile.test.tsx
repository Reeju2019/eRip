import { render, screen } from '@testing-library/react'
import Profile from './Profile'
import renderer from 'react-test-renderer'

test('auth profile', () => {
  render(<Profile />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<Profile />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

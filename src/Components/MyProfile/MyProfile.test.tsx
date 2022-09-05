import { fireEvent, getByTitle, render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import MyProfile from './MyProfile'
import React from 'react'

describe('my profile rendering specification', () => {
  // let button: HTMLElement
  test('my profile', () => {
    // const setStateMock = jest.fn()
    // const useStateMock: any = (useState: any) => [useState, setStateMock]
    // jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    // const { getByRole } = render(
      render(
      <Router>
        <MyProfile />
      </Router>,
    )
    // button = getByRole('button', { pressed: true })
    // fireEvent.click(button)

    // expect(setStateMock).toHaveBeenCalledWith(true)
  })
  it('SnapShot testing', () => {
    const component = renderer.create(
      <Router>
        <MyProfile />
      </Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render without crashing', () => {
    const div = document.createElement('div')
    render(
      <Router>
        <MyProfile />
      </Router>,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

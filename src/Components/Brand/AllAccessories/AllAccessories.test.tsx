import React from 'react'
import { render, screen } from '@testing-library/react'
import AllAccessories from './AllAccessoriesCarousel'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'

test('all accessories', () => {
  render(<AllAccessories />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<AllAccessories />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
<<<<<<< HEAD
    
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<AllAccessories />)
    ReactDOM.unmountComponentAtNode(div)
=======
>>>>>>> cb5880a93c98ef130e6353a40a30f7c7065eaaff
  })
})

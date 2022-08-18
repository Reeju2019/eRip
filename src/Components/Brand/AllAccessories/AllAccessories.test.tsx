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
    
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<AllAccessories />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

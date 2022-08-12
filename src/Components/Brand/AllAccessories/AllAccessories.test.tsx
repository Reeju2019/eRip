import React from 'react'
import { render, screen } from '@testing-library/react'
import AllAccessories from './AllAccessoriesCarousel'
import renderer from 'react-test-renderer'

test('all accessories', () => {
  render(<AllAccessories />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<AllAccessories />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    
  });
})

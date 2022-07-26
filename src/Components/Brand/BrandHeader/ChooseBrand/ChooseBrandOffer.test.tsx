import React from 'react'
import { render, screen } from '@testing-library/react'
import ChooseBrandOffer from './ChooseBrandOffer'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'

test('choose brand offer', () => {
  render(<ChooseBrandOffer />)
})

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<ChooseBrandOffer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render without crashing', () => {
    const div = document.createElement('div')
    render(<ChooseBrandOffer />)
    ReactDOM.unmountComponentAtNode(div)
  })
})

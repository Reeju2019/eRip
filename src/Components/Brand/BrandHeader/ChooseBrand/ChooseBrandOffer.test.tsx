import React from 'react'
import { render, screen } from '@testing-library/react'
import ChooseBrandOffer from './ChooseBrandOffer'
import renderer from 'react-test-renderer'


test('choose brand offer', () => {
  render(<ChooseBrandOffer />)
})

describe('App rendering specification', () => {
    it('SnapShot testing', () => {
      const component = renderer.create(<ChooseBrandOffer />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      
    });
})
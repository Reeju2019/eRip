import { render, screen } from '@testing-library/react'
import BrandHeader from './BrandHeader'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'

test('brand header', () => {
  render(<BrandHeader />)
})

<<<<<<< HEAD
  describe('App rendering specification', () => {
    it('SnapShot testing', () => {
      const component = renderer.create(<BrandHeader />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      
    })
    it('render without crashing', () => {
      const div = document.createElement('div')
      render(<BrandHeader />)
      ReactDOM.unmountComponentAtNode(div)
    })
})
=======
describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<BrandHeader />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
>>>>>>> cb5880a93c98ef130e6353a40a30f7c7065eaaff

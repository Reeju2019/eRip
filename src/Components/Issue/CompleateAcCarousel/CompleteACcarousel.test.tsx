import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import CompleateAcCarousel from './CompleateAcCarousel'



test('complete AC carousel', () => {
    render(<CompleateAcCarousel />)
  })
describe('App rendering specification', () => {
    it('SnapShot testing', () => {
      const component = renderer.create(<CompleateAcCarousel/>)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    it('render without crashing', () => {
      const div = document.createElement('div')
      render(<CompleateAcCarousel/>)
      ReactDOM.unmountComponentAtNode(div)
    })
  })
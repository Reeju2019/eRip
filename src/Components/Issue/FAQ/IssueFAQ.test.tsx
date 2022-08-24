import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import IssueFAQ from './IssueFAQ'



test('issue FAQ', () => {
    render(<IssueFAQ />)
  })
describe('App rendering specification', () => {
    it('SnapShot testing', () => {
      const component = renderer.create(<IssueFAQ/>)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    it('render without crashing', () => {
      const div = document.createElement('div')
      render(<IssueFAQ/>)
      ReactDOM.unmountComponentAtNode(div)
    })
  })
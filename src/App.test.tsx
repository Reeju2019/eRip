import App from './App'
import renderer from 'react-test-renderer'
// import { render } from '@testing-library/react'
// import ReactDOM from 'react-dom'

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  // it('render without crashing', () => {
  //   const div = document.createElement('div')
  //   render(<App />, div)
  //   ReactDOM.unmountComponentAtNode(div)
  // })
})

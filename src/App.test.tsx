import App from './App'
import renderer from 'react-test-renderer'

describe('App rendering specification', () => {
  it('SnapShot testing', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  
  
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('matches snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();

    expect(snapshot).toMatchSnapshot();
  })

  it('should render a h1 with a display class', () => {
    const wrapper = shallow(<App />);
    
    expect(wrapper.find('h1.display').length).toBe(1);
  })

  it('should be off by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.isOn).toBe(false);
  })
})

/*

- does it render without blowing up
- does it render the right UI
- state/props handled correctly
- events/methods working correctly

Specifications

- should be "off" by default

*/
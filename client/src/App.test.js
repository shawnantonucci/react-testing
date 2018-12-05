import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it.skip('matches snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render an h1 with a display class', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h1.display').length).toBe(1);
  });

  it('should be off by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.isOn).toBe(false);
  });

  it('should display the state of the switch', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    let display = wrapper.find('h1.display');
    expect(display.text()).toBe('Off');

    instance.toggle();
    display = wrapper.find('h1.display');
    expect(display.text()).toBe('On');
  });

  describe('toggle button', () => {
    it('should toggle state on click', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      const button = wrapper.find('.toggle-btn');

      expect(instance.state.isOn).toBe(false);
      button.simulate('click');
      expect(instance.state.isOn).toBe(true);
      button.simulate('click');
      expect(instance.state.isOn).toBe(false);
    });
  });
});

/*

- does it render without blowing up
- does it render the right UI
- state/props handled correctly
- events/methods working correctly

Specifications

- renders the display
- should be "off" by default
- should have a toggle button
- clicking the toggle button toggles the switch
- should display the switch's state
*/

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();

    expect(snapshot).toMatchSnapshot();
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
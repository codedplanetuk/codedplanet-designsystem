import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './panel';

describe('Panel atom', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('is truthy', () => {
    expect(Panel).toBeTruthy();
  });

});

import React from 'react';
import ReactDOM from 'react-dom';
import { DFIcon } from './icon';

describe('Icon atom', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DFIcon type="meh" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('is truthy', () => {
    expect(DFIcon).toBeTruthy();
  });

});

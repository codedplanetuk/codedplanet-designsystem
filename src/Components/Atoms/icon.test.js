import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

describe('Icon atom', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Icon type="meh" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('is truthy', () => {
    expect(Icon).toBeTruthy();
  });

});

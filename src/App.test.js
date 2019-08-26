import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Pages/Dashboard';

describe('Dashboard page', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('is truthy', () => {
    expect(Dashboard).toBeTruthy();
  });

});

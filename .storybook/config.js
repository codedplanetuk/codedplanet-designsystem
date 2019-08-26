// import { configure } from '@storybook/react';
//
// // automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }
// configure(loadStories, module);
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/Components/Shared/global';

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
configure(
  [
    // require.context('../src', true, /\.stories\.mdx$/),
    // require.context('../stories', true, /\.stories\.js$/),
    require.context('../src/Components/Atoms', true, /\.stories\.js$/),
    require.context('../src/Components/Molecoles', true, /\.stories\.js$/),
    require.context('../src/Components/Organisms', true, /\.stories\.js$/),
    require.context('../src/Components/General', true, /\.stories\.js$/),
  ],
  module
);








// configure(
//   [
//     require.context('../stories', true, /\.stories\.mdx$/),
//     require.context('../stories', true, /\.stories\.js$/),
//   ],
//   module
// );

// import { configure } from '@storybook/react';
//
// function loadStories() {
//   require('../stories/index.stories.js');
//   require('../src/Components/Atoms/index.stories.js');
//   // You can require as many stories as you need.
// }
//
// configure(loadStories, module);
//
// // const path = require('path');
// //
// // module.exports = ({ config }) => {
// //   config.resolve.modules.push(path.resolve(__dirname, "../src"));
// //   return config;
// // };

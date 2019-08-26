import React from 'react';
import Footer from './footer';
import Icon from '../Atoms/icon';
import { Row, Col } from 'antd';
import { action } from '@storybook/addon-actions';
import { color } from '../Shared/styles';

export default {
  title: 'Design System|Organisms/Footer',
  component: Footer,
};

export const footer = () => (
  <Footer />
);

footer.story = { name: 'Footer section' };

import React from 'react';
import { Logo } from './logo';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Design System|Atoms/Logo',
  component: Logo,
};

export const logo = () => (<Logo />)
export const logoWithBG = () => (<Logo bg="#DACC3E" />)
export const logoWithColor = () => (<Logo color="palevioletred" />)
export const logoWithBorder = () => (<Logo borderColor="#CCC" />)
export const logoWithBorderAndColor = () => (<Logo color="palevioletred" borderColor="palevioletred" />)

logo.story = { name: 'Default' };
logoWithBG.story = { name: 'With background' };
logoWithColor.story = { name: 'With color' };
logoWithBorder.story = { name: 'With border' };
logoWithBorderAndColor.story = { name: 'With border and color' };

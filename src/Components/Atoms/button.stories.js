import React from 'react';
import { Button } from './button';
import { action } from '@storybook/addon-actions';
import { color } from '../shared/styles';

export default {
  title: 'Design System|Atoms/Button',
  component: Button,
};

export const plainButton = () => (
  <Button>Plain</Button>
)

export const primButton = () => (
  <Button type="primary">Primary</Button>
)

plainButton.story = { name: 'Plain' };
primButton.story = { name: 'Primary' };

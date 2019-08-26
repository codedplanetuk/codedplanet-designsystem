import React from 'react';
import Icon from './icon';
import { action } from '@storybook/addon-actions';
import { color } from '../shared/styles';

export default {
  title: 'Design System|Atoms/Icon',
  component: Icon,
};

export const sad = () => (
  <Icon
    type="frown"
    theme="twoTone"
    size="2.5em"
    twoToneColor={color.primary}
    onClick={action('clicked')} />
  )

export const neutral = () => (
  <Icon
    type="meh"
    theme="twoTone"
    size="2.5em"
    twoToneColor={color.gold}
    onClick={action('clicked')} />
  )

export const happy = () => (
  <Icon
    type="smile"
    theme="twoTone"
    size="2.5em"
    twoToneColor={color.green}
    onClick={action('clicked')} />
  )

sad.story = { name: 'Sad' };
neutral.story = { name: 'Neural' };
happy.story = { name: 'Happy' };

import React from 'react';
import Panel from './panel';
import Icon from '../Atoms/icon';
import { Row, Col } from 'antd';
import { action } from '@storybook/addon-actions';
import { color } from '../Shared/styles';

export default {
  title: 'Design System|Molecoles/Panel',
  component: Panel,
};

const sad = () => (
  <Icon
    type="frown"
    theme="twoTone"
    size="2.5em"
    twoToneColor={color.primary}
    onClick={action('clicked')} />
  )

const neutral = () => (
  <Icon
    type="meh"
    theme="twoTone"
    size="2.5em"
    twoToneColor={color.gold}
    onClick={action('clicked')} />
  )

const happy = () => (
  <Icon
    type="smile"
    theme="twoTone"
    size="2.5em"
    twoToneColor={color.green}
    onClick={action('clicked')} />
  )

export const panel = () => (
  <Panel tagTitle="rate me">
    <Row>
      <Col style={{ 'textAlign': 'center'}} sm={8}>{ sad() }</Col>
      <Col style={{ 'textAlign': 'center'}} sm={8}>{ neutral() }</Col>
      <Col style={{ 'textAlign': 'center'}} sm={8}>{ happy() }</Col>
    </Row>
  </Panel>
);

panel.story = { name: 'Ratings panel' };

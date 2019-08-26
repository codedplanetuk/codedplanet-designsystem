"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.panel = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _panel = _interopRequireDefault(require("./panel"));

var _icon = _interopRequireDefault(require("../atoms/icon"));

var _antd = require("antd");

var _addonActions = require("@storybook/addon-actions");

var _styles = require("../shared/styles");

var _default = {
  title: 'Design System|Molecoles/Panel',
  component: _panel.default
};
exports.default = _default;

var sad = function sad() {
  return _react.default.createElement(_icon.default, {
    type: "frown",
    theme: "twoTone",
    size: "2.5em",
    twoToneColor: _styles.color.primary,
    onClick: (0, _addonActions.action)('clicked')
  });
};

var neutral = function neutral() {
  return _react.default.createElement(_icon.default, {
    type: "meh",
    theme: "twoTone",
    size: "2.5em",
    twoToneColor: _styles.color.gold,
    onClick: (0, _addonActions.action)('clicked')
  });
};

var happy = function happy() {
  return _react.default.createElement(_icon.default, {
    type: "smile",
    theme: "twoTone",
    size: "2.5em",
    twoToneColor: _styles.color.green,
    onClick: (0, _addonActions.action)('clicked')
  });
};

var panel = function panel() {
  return _react.default.createElement(_panel.default, {
    tagTitle: "rate me"
  }, _react.default.createElement(_antd.Row, null, _react.default.createElement(_antd.Col, {
    style: {
      'textAlign': 'center'
    },
    sm: 8
  }, sad()), _react.default.createElement(_antd.Col, {
    style: {
      'textAlign': 'center'
    },
    sm: 8
  }, neutral()), _react.default.createElement(_antd.Col, {
    style: {
      'textAlign': 'center'
    },
    sm: 8
  }, happy())));
};

exports.panel = panel;
panel.story = {
  name: 'Ratings panel'
};
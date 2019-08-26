"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.happy = exports.neutral = exports.sad = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _icon = _interopRequireDefault(require("./icon"));

var _addonActions = require("@storybook/addon-actions");

var _styles = require("../shared/styles");

var _default = {
  title: 'Design System|Atoms/Icon',
  component: _icon.default
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

exports.sad = sad;

var neutral = function neutral() {
  return _react.default.createElement(_icon.default, {
    type: "meh",
    theme: "twoTone",
    size: "2.5em",
    twoToneColor: _styles.color.gold,
    onClick: (0, _addonActions.action)('clicked')
  });
};

exports.neutral = neutral;

var happy = function happy() {
  return _react.default.createElement(_icon.default, {
    type: "smile",
    theme: "twoTone",
    size: "2.5em",
    twoToneColor: _styles.color.green,
    onClick: (0, _addonActions.action)('clicked')
  });
};

exports.happy = happy;
sad.story = {
  name: 'Sad'
};
neutral.story = {
  name: 'Neural'
};
happy.story = {
  name: 'Happy'
};
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoWithBorderAndColor = exports.logoWithBorder = exports.logoWithColor = exports.logoWithBG = exports.logo = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("./logo"));

var _addonActions = require("@storybook/addon-actions");

var _default = {
  title: 'Design System|Atoms/Logo',
  component: _logo.default
};
exports.default = _default;

var logo = function logo() {
  return _react.default.createElement(_logo.default, null);
};

exports.logo = logo;

var logoWithBG = function logoWithBG() {
  return _react.default.createElement(_logo.default, {
    bg: "#DACC3E"
  });
};

exports.logoWithBG = logoWithBG;

var logoWithColor = function logoWithColor() {
  return _react.default.createElement(_logo.default, {
    color: "palevioletred"
  });
};

exports.logoWithColor = logoWithColor;

var logoWithBorder = function logoWithBorder() {
  return _react.default.createElement(_logo.default, {
    borderColor: "#CCC"
  });
};

exports.logoWithBorder = logoWithBorder;

var logoWithBorderAndColor = function logoWithBorderAndColor() {
  return _react.default.createElement(_logo.default, {
    color: "palevioletred",
    borderColor: "palevioletred"
  });
};

exports.logoWithBorderAndColor = logoWithBorderAndColor;
logo.story = {
  name: 'Default'
};
logoWithBG.story = {
  name: 'With background'
};
logoWithColor.story = {
  name: 'With color'
};
logoWithBorder.story = {
  name: 'With border'
};
logoWithBorderAndColor.story = {
  name: 'With border and color'
};
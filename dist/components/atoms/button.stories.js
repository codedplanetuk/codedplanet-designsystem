"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primButton = exports.plainButton = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("./button");

var _addonActions = require("@storybook/addon-actions");

var _styles = require("../shared/styles");

var _default = {
  title: 'Design System|Atoms/Button',
  component: _button.Button
};
exports.default = _default;

var plainButton = function plainButton() {
  return _react.default.createElement(_button.Button, null, "Plain");
};

exports.plainButton = plainButton;

var primButton = function primButton() {
  return _react.default.createElement(_button.Button, {
    type: "primary"
  }, "Primary");
};

exports.primButton = primButton;
plainButton.story = {
  name: 'Plain'
};
primButton.story = {
  name: 'Primary'
};
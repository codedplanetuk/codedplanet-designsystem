"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footer = exports.default = void 0;

var _col = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _react = _interopRequireDefault(require("react"));

var _footer = _interopRequireDefault(require("./footer"));

var _icon = _interopRequireDefault(require("../atoms/icon"));

var _addonActions = require("@storybook/addon-actions");

var _styles = require("../shared/styles");

var _default3 = {
  title: 'Design System|Organisms/Footer',
  component: _footer.default
};
exports.default = _default3;

var footer = function footer() {
  return _react.default.createElement(_footer.default, null);
};

exports.footer = footer;
footer.story = {
  name: 'Footer section'
};
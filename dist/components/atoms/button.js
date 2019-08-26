"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DFButton = DFButton;

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * The `button` component
 */
function DFButton(props) {
  var type = props.type,
      children = props.children;
  return _react.default.createElement(_button.default, {
    type: type
  }, children);
}

DFButton.propTypes = {};
DFButton.defaultProps = {};
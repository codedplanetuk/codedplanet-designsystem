"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DFIcon;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.size ? props.size : '2.5em';
});
/**
 * The `icon` component is used for ratings etc
 */


function DFIcon(props) {
  return _react.default.createElement(Wrapper, {
    size: props.size
  }, _react.default.createElement(_antd.Icon, props));
}

DFIcon.propTypes = {
  type: _propTypes.default.string,
  theme: _propTypes.default.string,
  size: _propTypes.default.string,

  /**
   Define color for the twoTone efect
  */
  twoToneColor: _propTypes.default.string,
  onClick: _propTypes.default.func
};
DFIcon.defaultProps = {
  type: null,
  theme: null,
  twoToneColor: null,
  onClick: null,
  size: '2.5em'
};
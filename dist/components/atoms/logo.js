"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Logo;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  width: 330px;\n  background: ", ";\n  border-radius: 3px;\n  ", ";\n  ", ";\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 2.5em;\n  font-family: futura;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents.default.div(_templateObject());

var Container = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.bg ? props.bg : "transparent";
}, function (props) {
  return props.color && "color: ".concat(props.color);
}, function (props) {
  return props.borderColor && "border: 2px solid ".concat(props.borderColor);
});
/**
 * The `logo` component appears top left.
 */


function Logo(props) {
  var base = _react.default.createElement(Wrapper, null, "Coded Planet");

  return _react.default.createElement(Container, {
    color: props.color,
    bg: props.bg,
    borderColor: props.borderColor
  }, base);
}

Logo.propTypes = {
  color: _propTypes.default.string,
  bg: _propTypes.default.string,
  borderColor: _propTypes.default.string
};
Logo.defaultProps = {
  color: null,
  bg: null,
  borderColor: null
};
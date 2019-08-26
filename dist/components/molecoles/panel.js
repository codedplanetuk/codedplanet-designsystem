"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Panel;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding-right: 5px;\n  padding-left: 5px;\n  text-align: center;\n  border-left: solid 1px #F3F3F3;\n  border-bottom: solid 1px #F3F3F3;\n  float: right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  border: solid 1px #F3F3F3;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents.default.div(_templateObject());

var RightTag = _styledComponents.default.span(_templateObject2());
/**
 * The `icon` component is used for ratings etc
 */


function Panel(props) {
  var tagTitle = props.tagTitle,
      children = props.children;
  return _react.default.createElement(Wrapper, null, tagTitle && _react.default.createElement(_antd.Row, null, _react.default.createElement(RightTag, null, props.tagTitle)), children);
}

Panel.propTypes = {
  tagTitle: _propTypes.default.string,
  children: _propTypes.default.node
};
Panel.defaultProps = {
  tagTitle: null,
  children: null
};
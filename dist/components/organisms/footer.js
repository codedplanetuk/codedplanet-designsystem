"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  border: solid 1px #F3F3F3;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents.default.div(_templateObject());
/**
 * The `icon` component is used for ratings etc
 */


function Footer(props) {
  return _react.default.createElement(Wrapper, null, "FOOTER");
} // Panel.propTypes = {
//   tagTitle: PropTypes.string,
//   children: React.Node,
// }
//
// Panel.defaultProps = {
//   tagTitle: null,
//   children: null,
// };
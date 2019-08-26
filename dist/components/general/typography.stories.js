"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../shared/styles");

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 3rem;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: row;\n  > * {\n    flex: 1;\n    padding-right: 40px;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  > * {\n    margin-bottom: 1rem;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-weight: ", ";\n  > * {\n    margin-bottom: 1rem;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 3rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Info = _styledComponents.default.div(_templateObject());

var Heading1 = _styledComponents.default.div(_templateObject2(), _styles.typography.size.l3);

var Heading2 = _styledComponents.default.div(_templateObject3(), _styles.typography.size.l2);

var Heading3 = _styledComponents.default.div(_templateObject4(), _styles.typography.size.l1);

var Heading4 = _styledComponents.default.div(_templateObject5(), _styles.typography.size.m3);

var Heading5 = _styledComponents.default.div(_templateObject6(), _styles.typography.size.m3);

var Heading6 = _styledComponents.default.div(_templateObject7(), _styles.typography.size.m1);

var Heading7 = _styledComponents.default.div(_templateObject8(), _styles.typography.size.s3);

var Heading8 = _styledComponents.default.div(_templateObject9(), _styles.typography.size.s2);

var Heading9 = _styledComponents.default.div(_templateObject10(), _styles.typography.size.s1);

var HeadingWrapper = _styledComponents.default.div(_templateObject11(), _styles.typography.weight.black);

var Type1 = _styledComponents.default.div(_templateObject12(), _styles.typography.size.s3);

var Type2 = _styledComponents.default.div(_templateObject13(), _styles.typography.size.s2);

var Type3 = _styledComponents.default.div(_templateObject14(), _styles.typography.size.s1);

var TypeWrapper = _styledComponents.default.div(_templateObject15());

var Wrapper = _styledComponents.default.div(_templateObject16());

var Page = _styledComponents.default.div(_templateObject17());

var _default = {
  title: 'Design System|Typography'
};
exports.default = _default;

var all = function all() {
  return _react.default.createElement(Page, null, _react.default.createElement(Info, null, _react.default.createElement("div", null, _react.default.createElement("b", null, "Font:"), " Futura"), _react.default.createElement("div", null, _react.default.createElement("b", null, "Weights:"), " 400(normal), 600(bold), 900(black)")), _react.default.createElement(Wrapper, null, _react.default.createElement(HeadingWrapper, null, _react.default.createElement(Heading1, null, "48 heading"), _react.default.createElement(Heading2, null, "40 heading"), _react.default.createElement(Heading3, null, "32 heading"), _react.default.createElement(Heading4, null, "28 heading"), _react.default.createElement(Heading5, null, "24 heading"), _react.default.createElement(Heading6, null, "20 heading"), _react.default.createElement(Heading7, null, "16 heading"), _react.default.createElement(Heading8, null, "14 heading"), _react.default.createElement(Heading9, null, "12 heading")), _react.default.createElement(TypeWrapper, null, _react.default.createElement(Type1, null, "16 The quick brown fox jumps over the lazy dog"), _react.default.createElement(Type2, null, "14 The quick brown fox jumps over the lazy dog"), _react.default.createElement(Type3, null, "12 The quick brown fox jumps over the lazy dog"))));
};

exports.all = all;
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

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 3rem;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: row;\n  > ", " {\n    flex: 1;\n    padding-right: 40px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 1.25rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-right: 30px;\n  width: 80px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  width: 100px;\n  height: 50px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: 1.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Heading = _styledComponents.default.div(_templateObject(), _styles.typography.size.m1, _styles.typography.weight.black);

var Swatch = _styledComponents.default.div(_templateObject2());

var SwatchHex = _styledComponents.default.div(_templateObject3());

var SwatchGroup = _styledComponents.default.div(_templateObject4());

var Swatches = _styledComponents.default.div(_templateObject5());

var ColorWrapper = _styledComponents.default.div(_templateObject6(), Swatches);

var Page = _styledComponents.default.div(_templateObject7());

var colorfulColors = [_styles.color.primary, _styles.color.secondary, _styles.color.orange, _styles.color.gold, _styles.color.green, _styles.color.seafoam, _styles.color.purple, _styles.color.ultraviolet];
var monochromeColors = [_styles.color.darkest, _styles.color.darker, _styles.color.dark, _styles.color.mediumdark, _styles.color.medium, _styles.color.mediumlight, _styles.color.light, _styles.color.lighter, _styles.color.lightest];
var _default = {
  title: 'Design System|Color'
};
exports.default = _default;

var all = function all() {
  return _react.default.createElement(Page, null, _react.default.createElement(ColorWrapper, null, _react.default.createElement(Swatches, null, _react.default.createElement(Heading, null, "Color"), colorfulColors.map(function (swatch) {
    return _react.default.createElement(SwatchGroup, {
      key: swatch
    }, _react.default.createElement(SwatchHex, null, "".concat(swatch)), _react.default.createElement(Swatch, {
      style: {
        background: swatch
      }
    }), _react.default.createElement(Swatch, {
      style: {
        background: swatch,
        opacity: 0.8
      }
    }), _react.default.createElement(Swatch, {
      style: {
        background: swatch,
        opacity: 0.6
      }
    }), _react.default.createElement(Swatch, {
      style: {
        background: swatch,
        opacity: 0.3
      }
    }));
  })), _react.default.createElement(Swatches, null, _react.default.createElement(Heading, null, "Monochrome"), monochromeColors.map(function (swatch) {
    return _react.default.createElement(SwatchGroup, {
      key: swatch
    }, _react.default.createElement(SwatchHex, null, "".concat(swatch)), _react.default.createElement(Swatch, {
      style: {
        background: swatch
      }
    }));
  }))));
};

exports.all = all;
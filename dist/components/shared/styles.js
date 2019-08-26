"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageMargins = exports.pageMargin = exports.breakpoint = exports.typography = exports.spacing = exports.color = exports.background = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0 ", "px;\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Global style variables
var background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF'
};
exports.background = background;
var color = {
  // Palette
  primary: '#FF4785',
  // coral
  secondary: '#00A4FF',
  // ocean
  tertiary: '#DDDDDD',
  orange: '#FFA556',
  gold: '#F6C324',
  green: '#52D452',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',
  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',
  border: 'rgba(0,0,0,.1)',
  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00'
};
exports.color = color;
var spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30
  },
  borderRadius: {
    small: 5,
    default: 10
  }
};
exports.spacing = spacing;
var typography = {
  type: {
    primary: 'Futura, "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90'
  }
};
exports.typography = typography;
var breakpoint = 600;
exports.breakpoint = breakpoint;
var pageMargin = '5.55555';
exports.pageMargin = pageMargin;
var pageMargins = (0, _styledComponents.css)(_templateObject(), spacing.padding.medium, breakpoint * 1, pageMargin * 1, breakpoint * 2, pageMargin * 2, breakpoint * 3, pageMargin * 3, breakpoint * 4, pageMargin * 4);
exports.pageMargins = pageMargins;
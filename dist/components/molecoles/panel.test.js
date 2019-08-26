"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _panel = _interopRequireDefault(require("./panel"));

describe('Panel atom', function () {
  it('renders without crashing', function () {
    var div = document.createElement('div');

    _reactDom.default.render(_react.default.createElement(_panel.default, null), div);

    _reactDom.default.unmountComponentAtNode(div);
  });
  it('is truthy', function () {
    expect(_panel.default).toBeTruthy();
  });
});
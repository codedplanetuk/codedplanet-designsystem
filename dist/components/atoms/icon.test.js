"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _icon = _interopRequireDefault(require("./icon"));

describe('Icon atom', function () {
  it('renders without crashing', function () {
    var div = document.createElement('div');

    _reactDom.default.render(_react.default.createElement(_icon.default, {
      type: "meh"
    }), div);

    _reactDom.default.unmountComponentAtNode(div);
  });
  it('is truthy', function () {
    expect(_icon.default).toBeTruthy();
  });
});
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n\n:root {\n  --color-primary: #008cba;\n  --color-secondary: #4caf50;\n}\n\n.styles_banner__3FrG1 {\n  display: inline-block;\n  margin: 2em auto;\n  border: 2px solid #000;\n  font-size: 2em;\n}\n\n.styles_buttonBasic__2yy23 {\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n.styles_buttonPrimary__3Jpia {\n  background-color: var(--color-primary);\n}\n\n.styles_buttonSecondary__1OQ3B {\n  background-color: var(--color-secondary);\n}\n";
var styles = { "banner": "styles_banner__3FrG1", "buttonBasic": "styles_buttonBasic__2yy23", "buttonPrimary": "styles_buttonPrimary__3Jpia", "buttonSecondary": "styles_buttonSecondary__1OQ3B" };
styleInject(css);

function Button(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick,
      outline = _ref.outline,
      primary = _ref.primary,
      secondary = _ref.secondary;

  var primaryClass = secondary ? styles.buttonSecondary : styles.buttonPrimary;
  var outlineClass = outline ? styles.buttonOutline : styles.buttonBasic;

  return React__default.createElement(
    "button",
    { className: primaryClass + " " + outlineClass, onClick: onClick },
    title
  );
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: function onClick() {
    return console.log("Please implement the onClick");
  }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Banner = function (_Component) {
  inherits(Banner, _Component);

  function Banner() {
    classCallCheck(this, Banner);
    return possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
  }

  createClass(Banner, [{
    key: "render",
    value: function render() {
      var text = this.props.text;

      return React__default.createElement(
        "div",
        { className: styles.banner },
        "Banner: ",
        text
      );
    }
  }]);
  return Banner;
}(React.Component);
Banner.propTypes = {
  text: PropTypes.string
};

exports.Button = Button;
exports.Banner = Banner;
//# sourceMappingURL=index.js.map

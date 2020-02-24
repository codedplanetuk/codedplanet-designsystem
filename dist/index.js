'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var colors = {
  "color-primary": "#0062ff",
  "color-green": "#4caf50",
  "color-secondary": "#87868f",
  "color-solid": "#fff",
  "color-surface": "#44444f",
  "color-light": "#fff",
  "color-dark": "#44444f"
};

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

var css = "/* add css styles here (optional) */\n\n/**\n* Button component\n*/\n.button_btn__dCMn2 {\n  /* default for <button>, but needed for <a> */\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n\n  /* create a small space when buttons wrap on 2 lines */\n  margin: 2px 0;\n\n  /* invisible border (will be colored on hover/focus) */\n  border: solid 1px transparent;\n  border-radius: 10px;\n\n  /* button size comes from text + padding, avoid height */\n  padding: 0.5em 1em;\n  line-height: 17px;\n}\n\n.button_btnPrimary__3GyFx {\n  /* make sure colors have enough contrast! */\n  color: var(--color-white);\n  background-color: var(--color-primary);\n  border-color: var(--color-primary);\n  border-width: 2px;\n}\n\n.button_btnSecondary__sVfMg {\n  /* make sure colors have enough contrast! */\n  color: var(--color-white);\n  background-color: var(--color-secondary);\n  border-color: var(--color-secondary);\n  border-width: 2px;\n}\n\n.button_btnOutline__3nPC_ {\n  /* make sure colors have enough contrast! */\n  color: var(--color-primary);\n  background-color: var(--color-white);\n  border-width: 2px;\n  border-color: var(--color-primary);\n}\n\n/* old-school \"down\" effect on clic + color tweak */\n/* .btn:active {\n  transform: translateY(1px);\n  filter: saturate(150%);\n} */\n\n/* inverse colors on hover */\n/* .btn:hover {\n  color: #9050aa;\n  border-color: currentColor;\n  background-color: white;\n} */\n\n/* Firefox: remove the inner border shown on focus */\n.button_btn__dCMn2::-moz-focus-inner {\n  border: none;\n}\n\n/* make sure we have a visible focus ring */\n.button_btn__dCMn2:focus {\n  outline: none;\n  /* box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.5),\n    0 0 0 1.5px rgba(255, 105, 180, 0.5); */\n}\n\n/* hide focus style if not from keyboard navigation */\n.button_js-focus-visible__tf_Bm .button_btn__dCMn2:focus:not(.button_focus-visible__1khc7) {\n  box-shadow: none;\n}\n\n/* .buttonBasic {\n  color: white;\n  padding: 10px 28px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.buttonPrimary {\n  background-color: var(--color-primary);\n  border-width: 3px;\n  border-color: var(--color-primary);\n}\n\n.buttonSecondary {\n  background-color: var(--color-secondary);\n  border-width: 3px;\n  border-color: var(--color-secondary);\n}\n\n.buttonOutline {\n  color: var(--color-primary);\n  padding: 10px 28px;\n  text-align: center;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 5px;\n  background-color: #fff;\n  font-weight: 600;\n} */\n";
var styles = { "btn": "button_btn__dCMn2", "btnPrimary": "button_btnPrimary__3GyFx", "btnSecondary": "button_btnSecondary__sVfMg", "btnOutline": "button_btnOutline__3nPC_", "js-focus-visible": "button_js-focus-visible__tf_Bm", "focus-visible": "button_focus-visible__1khc7" };
styleInject(css);

function Button(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick,
      type = _ref.type,
      style = _ref.style;

  var primaryClass = type === "secondary" ? styles.btnSecondary : styles.btnPrimary;
  var outlineClass = type === "outline" ? styles.btnOutline : "";

  return React.createElement(
    "button",
    {
      className: styles.btn + " " + primaryClass + " " + outlineClass,
      style: style,
      onClick: onClick
    },
    title
  );
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};

Button.defaultProps = {
  onClick: function onClick() {
    return console.log("Please implement the onClick");
  }
};

var css$1 = "/* add css styles here (optional) */\n@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n\n:root {\n  --color-primary: #0062ff;\n  --color-green: #4caf50;\n  --color-secondary: #87868f;\n  --color-solid: #fff;\n  --color-surface: #44444f;\n  --color-white: #fff;\n  --color-dark: #44444f;\n}\n\nbody {\n  font-family: \"poppins\" !important;\n  color: var(--color-surface);\n  background-color: var(--color-solid);\n}\n\nh1 {\n  margin-top: 25px;\n}\n\nbutton {\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background-color: transparent;\n  font-family: \"poppins\" !important;\n  /* show a hand cursor on hover; some argue that we\n  should keep the default arrow cursor for buttons */\n  cursor: pointer;\n}\n\n/* .banner {\n  display: inline-block;\n  margin: 2em auto;\n  border: 2px solid #000;\n  font-size: 2em;\n} */\n\n.styles_container__2pRR5 {\n  padding: 0px;\n}\n\n.styles_flexParent__yyiGm {\n  display: flex;\n}\n\n.styles_flexGrower__2ID5c {\n  flex-grow: 1;\n}\n";
var GlobalStyles = { "container": "styles_container__2pRR5", "flexParent": "styles_flexParent__yyiGm", "flexGrower": "styles_flexGrower__2ID5c" };
styleInject(css$1);

var css$2 = "/**\n* Card component\n*/\n.card_card__dN1z2 {\n  border-radius: 23px;\n  border: solid 1px #e2e2ea;\n}\n\n.card_card-header__2YGj0 {\n  background-color: #fafafb;\n  color: #696974;\n  padding: 10px 20px 10px 20px;\n  border-radius: 23px 23px 0px 0px;\n  font-weight: bolder;\n}\n\n.card_card-body__3cAVA {\n  padding: 10px 20px 10px 20px;\n}\n";
var Styles = { "card": "card_card__dN1z2", "card-header": "card_card-header__2YGj0", "card-body": "card_card-body__3cAVA" };
styleInject(css$2);

function Card(_ref) {
  var header = _ref.header,
      children = _ref.children,
      style = _ref.style;
  var title = header.title,
      options = header.options;

  var optionButton = options && React.createElement(
    "span",
    null,
    "..."
  );
  var headerRow = React.createElement(
    "div",
    { className: GlobalStyles.flexParent + " " + Styles["card-header"] },
    React.createElement(
      "div",
      { className: GlobalStyles.flexGrower },
      title
    ),
    React.createElement(
      "div",
      null,
      optionButton
    )
  );

  return React.createElement(
    "div",
    { className: Styles.card, style: style },
    title && headerRow,
    React.createElement(
      "div",
      { className: Styles["card-body"] },
      children
    )
  );
}

Card.propTypes = {
  children: PropTypes.node,
  header: PropTypes.object,
  style: PropTypes.object
};

Card.defaultProps = {
  header: {}
};

function Container(_ref) {
  var style = _ref.style,
      children = _ref.children;

  return React.createElement(
    "div",
    { className: GlobalStyles.container, style: style },
    children
  );
}

Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
};

Container.defaultProps = {};

function Grid(_ref) {
  var style = _ref.style,
      children = _ref.children;

  return React.createElement(
    "div",
    { className: GlobalStyles.flexParent, style: style },
    children
  );
}

Grid.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
};

Grid.defaultProps = {};

exports.Button = Button;
exports.Card = Card;
exports.Container = Container;
exports.Grid = Grid;
exports.Colors = colors;
//# sourceMappingURL=index.js.map

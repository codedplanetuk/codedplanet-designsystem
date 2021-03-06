import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../styles.css";

function Container({ style, children }) {
  return (
    <div className={GlobalStyles.container} style={style}>
      {children}
    </div>
  );
}

Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
};

Container.defaultProps = {};

export { Container };

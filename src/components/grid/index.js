import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../styles.css";

function Grid({ style, children }) {
  return (
    <div className={GlobalStyles.flexParent} style={style}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
};

Grid.defaultProps = {};

export { Grid };

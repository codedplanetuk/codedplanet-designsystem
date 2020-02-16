import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles.css";

function Container({ style, children }) {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
}

Container.propTypes = {
  style: PropTypes.object
};

Container.defaultProps = {};

export { Container };

import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "../../styles.css";

function Button({ title, onClick, outline, primary, secondary }) {
  const primaryClass = secondary
    ? styles.buttonSecondary
    : styles.buttonPrimary;
  const outlineClass = outline ? styles.buttonOutline : styles.buttonBasic;

  return (
    <button className={`${primaryClass} ${outlineClass}`} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => console.log("Please implement the onClick")
};

export { Button };

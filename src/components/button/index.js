import React from "react";
import PropTypes from "prop-types";
import "../../styles.css";
import styles from "./button.css";

function Button({ title, onClick, type }) {
  const primaryClass =
    type === "secondary" ? styles.btnSecondary : styles.btnPrimary;
  const outlineClass = type === "outline" ? styles.btnOutline : "";

  return (
    <button
      className={`${styles.btn} ${primaryClass} ${outlineClass}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => console.log("Please implement the onClick")
};

export { Button };

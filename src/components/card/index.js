import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../styles.css";
import Styles from "./card.css";

function Card({ header, children, style }) {
  const { title, options } = header;
  const optionButton = options && <span>...</span>;
  const headerRow = (
    <div className={`${GlobalStyles.flexParent} ${Styles["card-header"]}`}>
      <div className={GlobalStyles.flexGrower}>{title}</div>
      <div>{optionButton}</div>
    </div>
  );

  return (
    <div className={Styles.card} style={style}>
      {title && headerRow}
      <div className={Styles["card-body"]}>{children}</div>
    </div>
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

export { Card };

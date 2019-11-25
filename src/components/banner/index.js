import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "../../styles.css";

export class Banner extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;
    return <div className={styles.banner}>Banner: {text}</div>;
  }
}

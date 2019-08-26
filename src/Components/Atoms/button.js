import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import PropTypes from "prop-types";

/**
 * The `button` component
 */
export function DFButton(props) {
  const { type, children } = props;
  return (
    <Button type={type} >{children}</Button>
  )
}

DFButton.propTypes = {
}

DFButton.defaultProps = {
};

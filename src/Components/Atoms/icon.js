import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  font-size: ${props => props.size ? props.size : '2.5em'};
`

/**
 * The `icon` component is used for ratings etc
 */
export default function DFIcon(props) {
  return (
    <Wrapper size={props.size}>
      <Icon {...props} />
    </Wrapper>
  )
}

DFIcon.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
  /**
   Define color for the twoTone efect
  */
  twoToneColor: PropTypes.string,
  onClick: PropTypes.func
}

DFIcon.defaultProps = {
  type: null,
  theme: null,
  twoToneColor: null,
  onClick: null,
  size: '2.5em',
};

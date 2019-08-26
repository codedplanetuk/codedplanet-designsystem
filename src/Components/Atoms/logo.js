import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  font-size: 2.5em;
  font-family: futura;
`

const Container = styled.div`
  width: 330px;
  background: ${props => props.bg ? props.bg : "transparent"};
  border-radius: 3px;
  ${props => props.color && `color: ${props.color}`};
  ${props => props.borderColor && `border: 2px solid ${props.borderColor}`};
  text-align: center;
`

/**
 * The `logo` component appears top left.
 */
export default function Logo(props) {
  const base = <Wrapper>Coded Planet</Wrapper>;
  return (
    <Container
      color={props.color}
      bg={props.bg}
      borderColor={props.borderColor}
    >
      {base}
    </Container>
  )
}

Logo.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  borderColor: PropTypes.string
}

Logo.defaultProps = {
  color: null,
  bg: null,
  borderColor: null
};

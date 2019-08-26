import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { Row, Col } from 'antd';

const Wrapper = styled.div`
  border: solid 1px #F3F3F3;
`

/**
 * The `icon` component is used for ratings etc
 */
export default function Footer(props) {
  return (
    <Wrapper>
      FOOTER
    </Wrapper>
  )
}

// Panel.propTypes = {
//   tagTitle: PropTypes.string,
//   children: React.Node,
// }
//
// Panel.defaultProps = {
//   tagTitle: null,
//   children: null,
// };

import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { Row, Col } from 'antd';

const Wrapper = styled.div`
  border: solid 1px #F3F3F3;
`

const RightTag = styled.span`
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;
  border-left: solid 1px #F3F3F3;
  border-bottom: solid 1px #F3F3F3;
  float: right;
`

/**
 * The `icon` component is used for ratings etc
 */
export default function Panel(props) {
  const {tagTitle, children} = props;
  return (
    <Wrapper>
      { tagTitle && <Row><RightTag>{props.tagTitle}</RightTag></Row> }
      { children }
    </Wrapper>
  )
}

Panel.propTypes = {
  tagTitle: PropTypes.string,
  children: PropTypes.node,
}

Panel.defaultProps = {
  tagTitle: null,
  children: null,
};

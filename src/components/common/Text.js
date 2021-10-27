import React from "react";
import styled from "styled-components";

const StyledText = styled(props => props.as)`
      color: ${props => props.color};
      font-size: ${props => props.fontSize};
      font-weight: ${props => props.fontWeight};
      font-style: ${props => props.fontStyle};
      line-height: ${props => props.lineHeight};
      text-align: ${props => props.textAlign};
      word-wrap: ${props => props.wordWrap};
      line-break: ${props => props.lineBreak};
    `

const Text = (props) => {

    return (
        props.textType === 'html' ?
            <StyledText dangerouslySetInnerHTML={{__html: props.text}} {...props}/> :
            <StyledText {...props}>{props.text}</StyledText>

    )
}

export default Text


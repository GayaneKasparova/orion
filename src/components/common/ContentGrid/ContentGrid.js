import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/theme";

import {uniqueId} from 'lodash'

const Grid = styled.ul`
  display: flex;
  flex-direction: ${props => props.verticalOnMobile ? 'column' : 'row'};
  gap: 24px;
  flex-wrap: ${props => props.scrollable ? 'nowrap' : 'wrap'};
  overflow-x: auto;

  ${theme.media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const GridItem = styled.li`
  margin-bottom: 32px;
  width: ${props => !props.scrollable ? `calc(${100 / props.cols}% - 20px)` : '100%'};


  ${theme.media.md} {
    min-width: 100px;
    margin-bottom: 0;
  } 
`
const ContentGrid = ({cols, children, scrollable, verticalOnMobile = true }) => {
    return (
        <Grid verticalOnMobile={verticalOnMobile} scrollable={scrollable}>
            {children.map(item => (
                <GridItem key={uniqueId('col')} cols={cols}>{item}</GridItem>
            ))}
        </Grid>
    )
}

export default ContentGrid
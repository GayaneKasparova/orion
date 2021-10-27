import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/theme";

import {uniqueId} from 'lodash'

const Grid = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${theme.media.md} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const GridItem = styled.li`
  margin-bottom: 32px;

  ${theme.media.md} {
    width: ${props => `calc(${100 / props.cols}% - 20px)`};
    margin-bottom: 0;
  } 
`
const ContentGrid = ({cols, children }) => {
    return (
        <Grid>
            {children.map(item => (
                <GridItem key={uniqueId('col')} cols={cols}>{item}</GridItem>
            ))}
        </Grid>
    )
}

export default ContentGrid
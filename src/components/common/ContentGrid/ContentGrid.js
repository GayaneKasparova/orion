import React from "react"
import styled from "styled-components"
import { theme } from "../../../styles/theme"

import { uniqueId } from "lodash"

const Grid = styled.ul`
  display: flex;
  flex-direction: ${props => props.verticalOnMobile ? "column" : "row"};
  gap: 24px;
  flex-wrap: ${props => props.scrollable ? "nowrap" : "wrap"};
  overflow-x: auto;

  ${theme.media.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const GridItem = styled.li`
  min-width: ${props=>props.minWidth}px;
  margin-bottom: 32px;

  ${theme.media.lg} {
    width: ${props => `calc(${100 / props.cols}% - 20px)`};
    margin-bottom: 0;
  }
`
const ContentGrid = ({ cols, children, scrollable, minWidth, verticalOnMobile = true, gridStyles }) => {
  return (
    <Grid
      verticalOnMobile={verticalOnMobile}
      scrollable={scrollable}
      style={gridStyles}
    >
      {children.map(item => (
        <GridItem key={uniqueId("col")}
                  cols={cols}
                  minWidth={minWidth}
        >
          {item}
        </GridItem>
      ))}
    </Grid>
  )
}

export default ContentGrid
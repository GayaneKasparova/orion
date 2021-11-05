import styled from 'styled-components'
import { theme, containerMaxWidths } from '../../../styles/theme'

export const ContainerBox = styled.div`
  max-width: ${containerMaxWidths.sm}px;
  width: ${props => !props.fullWidth ? `calc(100% - ${theme.space.m * 2}px)` : `100%`};
  margin-left: auto;
  margin-right: auto;
  
  
  ${theme.media.md} {
    max-width: ${containerMaxWidths.md}px;
    width: calc(100% - ${theme.space.l * 2}px);
  }

  ${theme.media.lg} {
    max-width: ${containerMaxWidths.lg}px;
    width: calc(100% - ${theme.space.xxl5 * 2}px);
  }
  
  ${theme.media.xl} {
    max-width: ${containerMaxWidths.xl}px;
    width: calc(100% - ${theme.space.xxl8 * 2}px);
  }
`


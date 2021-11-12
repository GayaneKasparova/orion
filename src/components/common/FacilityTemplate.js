import React from "react"
import Seo from "../Seo"
import RoundMeIFrame from "./RoundMeIFrame"
import { ContainerBox } from "./ContainerBox/ContainerBox"
import styled from "styled-components"
import { theme } from "../../styles/theme"
import { GatsbyImage } from "gatsby-plugin-image"
import RichText from "../Article/Content/RichText"

const FacilityTemplate = ({
                            seoSettings,
                            title,
                            roundmeLink,
                            cover,
                            content
                          }) => {

  return (
    <div>
      <Seo {...seoSettings} />
      {cover && <Cover image={cover.gatsbyImageData} alt={title} />}

      <StyledContainerBox>
        <StyledHeadline>{title}</StyledHeadline>
        <RichText data={{ body: content }} />

        {roundmeLink && <RoundMeIFrame title={title} link={roundmeLink} />}

      </StyledContainerBox>

    </div>
  )
}

export default FacilityTemplate

const StyledContainerBox = styled(ContainerBox)`
  padding: ${theme.space.s}px 0;

  ${theme.media.lg} {
    padding: ${theme.space.m}px 0;
  }
`

const Cover = styled(GatsbyImage)`
  width: 100%;

  ${theme.media.lg} {
  }
`

const StyledHeadline = styled.h1`
  margin: ${theme.space.s}px 0;

  ${theme.media.lg} {
    margin: ${theme.space.m}px 0;
  }
`
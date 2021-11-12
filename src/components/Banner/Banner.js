import React from "react"
import styled from "styled-components"
import { ContainerBox } from "../common/ContainerBox/ContainerBox"
import { theme } from "../../styles/theme"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledBtn } from "../../styles/globalStyles"

const BannerBlock = ({
                       bgImage,
                       title,
                       subtitle,
                       bannerBtnText,
                       bannerBtnLink
                     }) => {

  return (
    <Banner bgImage={bgImage} onScroll={() => window.scrollTo({
      top: "100vh",
      behavior: "smooth"
    })}>
      <ContainerBox className="opacity-block">
        <BannerTitle>{subtitle}</BannerTitle>
        <BannerText>{title}</BannerText>
        { bannerBtnLink && bannerBtnLink && <BannerButton to={bannerBtnLink} title={bannerBtnText} />}
      </ContainerBox>
    </Banner>)
}

const Banner = styled.div`
{
  height: calc(100vh - 91px);
  padding: 30px 0;
  display: flex;
  min-height: 300px;
  align-items: center;
  background-image: url("${props => props?.bgImage?.url}");
  background-size: cover;
  background-position: center;
  text-align: center;
  transition: transform .3s ease;

  ${theme.media.md} {
    padding: ${theme.space.xl}px 0;
    text-align: left;
  }

  ${theme.media.lg} {
    padding: ${theme.space.xxl}px 0;
  }

  ${theme.media.xl} {
    padding: 120px 0;
  }

  .opacity-block {
    padding-bottom: 4px;

    &::before {
      top: -16px;
      right: -16px;
      bottom: -16px;
      left: -16px;
      background: #1c1c1c91;

      ${theme.media.lg} {
        top: -32px;
        right: -32px;
        bottom: -32px;
        left: -32px;
      }
    }
  }
}
`

const BannerTitle = styled.h1` {
  display: block;

  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.07em;
  font-weight: 600;

  color: ${theme.colors.red};

  ${theme.media.sm} {
    font-size: 22px;
  }

  ${theme.media.md} {
    max-width: 484px;
    max-height: 114px;
    font-size: 32px;
  }
}`

const BannerText = styled.p` {
  display: block;
  margin: 24px 0;
  max-width: 600px;

  font-size: 24px;
  font-style: normal;
  font-weight: ${theme.fontWeights.medium};

  color: ${theme.colors.neonBlue};

  ${theme.media.md} {
    font-size: 44px;
    max-height: 180px;
  }

}`

const BannerButton = styled(AnchorLink)` {
  display: inline-block;
  ${StyledBtn}
}`


export default BannerBlock
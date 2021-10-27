import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Banner from "../components/Banner/Banner"
import styled from "styled-components"
import { theme } from "../styles/theme"

const IndexPage = (/*{
                       data: {
                           home: {
                               seoSettings,
                               bannerBackgroundImage,
                               bannerTitle,
                               bannerSubtitle,
                               bannerBtnText,
                               bannerBtnLink/!*,
                               aboutUsTitle,
                               aboutUsText,
                               orionSportsClubTitle,
                               orionSportsClubDescription,
                               orionFightingClubTitle,
                               orionFightingClubDescription*!/
                           }
                       }
                   }*/) => {
  return (

    /*<div>
        <Seo {...seoSettings} />
        <Banner
          bgImage={bannerBackgroundImage}
          title={bannerTitle}
          subtitle={bannerSubtitle}
          bannerBtnText={bannerBtnText}
          bannerBtnLink={bannerBtnLink}
        />
    </div>*/
    <HeadLine>
      <GradientText>Tss</GradientText> 🤫
      <br />
      <GradientText>COMING SOON.....</GradientText>
    </HeadLine>
  )
}

const HeadLine = styled.h1`
  text-align: center;
  font-size: 32px;
  ${theme.media.sm} {
    font-size: 46px;
  }
  ${theme.media.md} {
    font-size: 52px;
  }
  ${theme.media.lg} {
    font-size: 64px;
  }
  ${theme.media.xl} {
    font-size: 72px;
  }
`
const GradientText = styled.span`
  display: inline-block;
  background: #00BFDF;
  background: -webkit-linear-gradient(to right, #00BFDF 0%, #9113D3 100%);
  background: -moz-linear-gradient(to right, #00BFDF 0%, #9113D3 100%);
  background: linear-gradient(to right, #00BFDF 0%, #9113D3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
/*
export const query = graphql`
    query HomePage($locale: String!){
        home: datoCmsHomePage (locale: {eq: $locale}) {
            seoSettings {
                title
                description
                image {
                    fixed(width: 600) {
                        src
                    }
                }
            }

            bannerTitle
            bannerSubtitle
            bannerBackgroundImage {
                url
            }
            bannerBtnText
            bannerBtnLink

            aboutUsTitle
            aboutUsText

            orionSportsClubTitle
            orionSportsClubDescription

            orionFightingClubTitle
            orionFightingClubDescription

        }
    }`*/

export default IndexPage


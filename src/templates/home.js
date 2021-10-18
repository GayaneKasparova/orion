import React from 'react'
import {graphql} from "gatsby";
import Seo from "../components/Seo";
import Banner from "../components/Banner/Banner"

const IndexPage = ({
                       data: {
                           home,
                           home: {
                               seoSettings,
                               bannerBackgroundImage,
                               bannerTitle,
                               bannerSubtitle,
                               bannerBtnText,
                               bannerBtnLink,
                               aboutUsTitle,
                               aboutUsText,
                               orionSportsClubTitle,
                               orionSportsClubDescription,
                               orionFightingClubTitle,
                               orionFightingClubDescription
                           }
                       }
                   }) => {

    return (
      <>
          <Seo {...seoSettings} />
          <Banner
            bgImage={bannerBackgroundImage}
            title={bannerTitle}
            subtitle={bannerSubtitle}
            bannerBtnText={bannerBtnText}
            bannerBtnLink={bannerBtnLink}
          />
      </>
    )
}

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
    }`

export default IndexPage


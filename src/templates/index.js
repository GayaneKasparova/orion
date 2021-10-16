import React from 'react'
import {graphql} from "gatsby";
import styled from "styled-components";
import BannerBlock from "../components/Banner/Banner";
import TitledSection from "../components/Common/TitledSection/TitledSection";
import TopArticles from "../components/TopArticles/TopArticles";
import TopPartners from "../components/TopPartners/TopPartners";
import Text from "../components/Common/Text";
import {useWindowSize} from "../hooks/useWindowSize";
import ContactUs from "../components/ContactUs/ContactUs";
import Seo from "../components/Seo";
import QuotesSection from "../components/Quotes Block/QuotesSection";

const TopPartnersSection = styled(TitledSection)`
  background-color: red;
  font-size: 500px;
`

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
   // const {width} = useWindowSize()

    console.log(home)

    return (
        <>
           <Seo {...seoSettings}/>


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


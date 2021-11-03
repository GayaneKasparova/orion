import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Banner from "../components/Banner/Banner"
import Team from "../components/Team/Team"

const IndexPage = ({
                     data: {
                       home: {
                         seoSettings,
                         bannerBackgroundImage,
                         bannerTitle,
                         bannerSubtitle,
                         bannerBtnText,
                         bannerBtnLink,
                         teamTitle,
                         team
                       }
                     }
                   }) => {

  return (
    <div>
      <Seo {...seoSettings} />
      <Banner
        bgImage={bannerBackgroundImage}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        bannerBtnText={bannerBtnText}
        bannerBtnLink={bannerBtnLink}
      />

      <Team
        teamTitle={teamTitle}
        team={team}
      />
    </div>
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

            teamTitle
            team {
                id
                name
                slug
                photo {
                    gatsbyImageData(aspectRatio: 1, imgixParams: {w: "200", h: "200", fit: "crop"})
                }
                title
                bio
            }
        }
    }`

export default IndexPage


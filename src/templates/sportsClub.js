import React from "react"
import { graphql } from "gatsby"
import FacilityTemplate from "../components/common/FacilityTemplate"

const SportsClub = ({
                      data: {
                        sportsClub
                      }
                    }) => {

  return (
    <FacilityTemplate {...sportsClub}/>
  )
}

export const query = graphql`
    query SportsClubPage($locale: String!){
        sportsClub: datoCmsSportsClub (locale: {eq: $locale}) {
            seoSettings {
                title
                description
                image {
                    fixed(width: 600) {
                        src
                    }
                }
            }

            cover {
                gatsbyImageData(aspectRatio: 1.7)
            }
            title
            roundmeLink
            content
        }
    }`


export default SportsClub
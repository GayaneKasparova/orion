import React from "react"
import { graphql } from "gatsby"
import FacilityTemplate from "../components/common/FacilityTemplate"

const Bar = ({
               data: {
                 bar
               }
             }) => {

  return (
    <FacilityTemplate {...bar} />
  )
}

export const query = graphql`
    query BarPage($locale: String!){
        bar: datoCmsBar (locale: {eq: $locale}) {
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


export default Bar
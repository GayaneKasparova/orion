import React from "react"
import { graphql } from "gatsby"
import FacilityTemplate from "../components/common/FacilityTemplate"

const BoxingSalon = ({
                       data: {
                         boxingSalon
                       }
                     }) => {

  return (
    <FacilityTemplate {...boxingSalon}/>
  )
}

export const query = graphql`
    query BoxingSalonPage($locale: String!){
        boxingSalon: datoCmsBoxingSalon (locale: {eq: $locale}) {
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


export default BoxingSalon
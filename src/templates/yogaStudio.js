import React from "react"
import { graphql } from "gatsby"
import FacilityTemplate from "../components/common/FacilityTemplate"

const YogaStudio = ({
                      data: {
                        yogaStudio
                      }
                    }) => {

  return (
    <FacilityTemplate {...yogaStudio}/>
  )
}

export const query = graphql`
    query YogaStudioPage($locale: String!){
        yogaStudio: datoCmsYogaStudio(locale: {eq: $locale}) {
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
            content
            roundmeLink
        }
    }`


export default YogaStudio
import React from "react"
import { graphql } from "gatsby"
import FacilityTemplate from "../components/common/FacilityTemplate"

const MeetingRoom = ({
                      data: {
                        meetingRoom
                      }
                    }) => {

  return (
    <FacilityTemplate {...meetingRoom} />
  )
}

export const query = graphql`
    query MeetingRoomPage($locale: String!){
        meetingRoom: datoCmsMeetingRoom (locale: {eq: $locale}) {
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


export default MeetingRoom
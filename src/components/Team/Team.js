import ContentGrid from "../common/ContentGrid/ContentGrid"
import PersonIcon from "../Person/PersonIcon"
import React from "react"
import TitledSection from "../common/TitledSection/TitledSection"
import { graphql } from "gatsby"

const Team = ({ team, teamTitle }) => (

  <TitledSection title={teamTitle} id={'team'}>
    <ContentGrid cols={4} verticalOnMobile={false}>
      {
        team.map(member => <PersonIcon {...member} key={member.id}/>)
      }
    </ContentGrid>
  </TitledSection>
)

export default Team

export const query = graphql`
    fragment Team on DatoCmsPerson {
        title
        person {
            name
            photo {
                gatsbyImageData(aspectRatio: 1, imgixParams: {w: "200", h: "200", fit: "crop"})
            }
            title
            bio
        }
        model {
            apiKey
        }
    }
`

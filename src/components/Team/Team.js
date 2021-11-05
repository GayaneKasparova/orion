import ContentGrid from "../common/ContentGrid/ContentGrid"
import PersonIcon from "../Person/PersonIcon"
import React from "react"
import TitledSection from "../common/TitledSection/TitledSection"
import { graphql } from "gatsby"
import { useWindowSize } from "../../hooks/useWindowSize"
import { theme } from "../../styles/theme"

const Team = ({ team, teamTitle }) => {
  const {width} = useWindowSize()


  return (
    <TitledSection
      title={teamTitle}
      id={"team"}
      fullWidth={width < theme.breakpoints.md}
    >
      <ContentGrid
        cols={4}
        verticalOnMobile={false}
        scrollable={true}
        minWidth={120}
      >
        {
          team.map(member => <PersonIcon {...member} key={member.id} />)
        }
      </ContentGrid>
    </TitledSection>
  )
}

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

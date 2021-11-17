import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { ContainerBox } from "../components/common/ContainerBox/ContainerBox"
import styled from "styled-components"
import { theme } from "../styles/theme"
import RichText from "../components/Article/Content/RichText"

const TeamMember = ({
                      data: {
                        teamMember: {
                          firstName,
                          lastName,
                          photo,
                          title,
                          bio
                        }
                      }
                    }) => {

  return (
    <PageWrapper>
      <ContentWrapper>
        {photo && <CoverImage image={photo?.gatsbyImageData} alt={photo.alt || `${firstName} ${lastName}'s photo`} />}
        <div>
          <Name>{firstName} {lastName}</Name>
          <h2>{title}</h2>
        </div>
      </ContentWrapper>
      <RichText data={{ body: bio }} />
    </PageWrapper>
  )
}

export const query = graphql`
    query TeamMember($slug: String!, $locale: String!) {
        teamMember: datoCmsTeam(slug: { eq: $slug }, locale: {eq: $locale}) {
            slug
            locale
            firstName
            lastName
            photo {
                gatsbyImageData(aspectRatio: 0.7, imgixParams: {w: "300", h: "400", fit: "crop"})
            }
            title
            bio
        }
    }
`

const PageWrapper = styled(ContainerBox)`
  padding: ${theme.space.m}px 0;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.media.md} {
    padding-top: ${theme.space.l}px;
    flex-direction: row;
  }
`

const CoverImage = styled(GatsbyImage)`
  max-height: calc(100vh - 90px);
  margin: ${theme.space.s}px ${theme.space.s}px ${theme.space.s}px 0;
  ${theme.media.md} {
    margin: ${theme.space.m}px ${theme.space.m}px ${theme.space.m}px 0;
  }
`

const Name = styled.h1`
  margin: ${theme.space.s}px 0;
  color: ${theme.colors.red};

  ${theme.media.lg} {
    margin: ${theme.space.m}px 0;
  }
`

export default TeamMember
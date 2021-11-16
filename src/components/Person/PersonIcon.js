import React, { useContext } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { teamMemberUrl } from "../../urls"
import { LocaleStateContext } from "../../context/LocaleContextProvider"
import { GradientBorder } from "../../styles/globalStyles"

const PersonIcon = ({ firstName, lastName, photo, title, slug }) => {
  const  {locale} = useContext(LocaleStateContext)

  return (
    <Link to={teamMemberUrl(locale, slug)}>
      <PhotoFrame>
        {photo && <Photo image={photo.gatsbyImageData} alt={`${firstName} ${lastName}'s photo`} />}
      </PhotoFrame>
      <Name>{firstName}{lastName ? ` ${lastName?.slice(0,1)}.` : ''}</Name>
    </Link>
  )
}
const PhotoFrame = styled.div`
  ${GradientBorder}
`

const Photo = styled(GatsbyImage)`
  * {
    border-radius: 50%;
  }
  overflow: hidden;
`

const Name = styled.h4`
  width: 80%;
  margin:  auto;
  text-align: center;
`

export default PersonIcon
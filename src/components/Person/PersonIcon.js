import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from "../../styles/theme"

const PersonIcon = ({ name, photo, title }) => {
  return (
    <>
      <PhotoFrame>
        {photo && <Photo image={photo.gatsbyImageData} alt={`${name}'s photo`} />}
      </PhotoFrame>
      <Name>{name}</Name>
    </>
  )
}
const PhotoFrame = styled.div`
  position: relative;
  padding: 3px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all .3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    background-image: linear-gradient(to right, ${theme.colors.neonBlue} 15%, ${theme.colors.pink} 100%);
    transition: all .5s ease;
  }

  &:hover {
    box-shadow: 0 0 10px ${theme.colors.neonBlue};
    &::before {
      transform:  rotate(320deg);
    }
  }
`

const Photo = styled(GatsbyImage)`
  border-radius: 50%;
  overflow: hidden;
`

const Name = styled.h4`
  width: 80%;
  margin: auto;
  text-align: center;
`

export default PersonIcon
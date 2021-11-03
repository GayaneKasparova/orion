import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { LocaleStateContext } from "../../context/LocaleContextProvider"
import styled from "styled-components"

const SocialLinks = () => {
  const data = useStaticQuery(
    graphql`
        query socialLinks {
            socialLinks: allDatoCmsSocialLink {
                nodes {
                    id
                    name
                    locale
                    url
                    icon {
                        url
                    }
                }
            }
        }
    `
  )

  const { locale } = useContext(LocaleStateContext)
  const socialLinks = data.socialLinks.nodes.filter(link => {
    return link.locale === locale && link.url
  })


  return (
    <LinksList>
      {
        socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link?.url}>
                {link?.icon?.url ? <img src={link?.icon?.url} alt={link?.name} /> : <span>{link.name}</span>}
              </a>
            </li>
          )
        })
      }
    </LinksList>
  )
}

const LinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li {
    margin-left: 16px;
  }
  img {
    border-radius: 50%;
    width: 28px;
  }
`

export default SocialLinks
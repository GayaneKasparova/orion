import React, { useState } from "react"
import useNavLinks from "../../hooks/use-nav-links"
import Navbar from "./NavBar/NavBar"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { ContainerBox } from "../../components/common/ContainerBox/ContainerBox"
import { theme } from "../../styles/theme"
import { useWindowSize } from "../../hooks/useWindowSize"
import MenuBtn from "./MenuBtn"
import LocaleControl from "./NavBar/LocaleControl"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const navItems = useNavLinks('header')
  const { width } = useWindowSize()
  const [menuIsOpen, setMenuOpen] = useState(false)

  const { global: { logo } } = useStaticQuery(
    graphql`
        query Global {
            global: datoCmsGlobal {
                logo {
                    url
                }
            }
        }
    `
  )

  return (

    <StyledHeader>
      <HeaderContainerBox>
        <LogoWrapper
          to={"/"}
          onClick={() => setMenuOpen(false)}
        >
          <img
                        src={logo.url}
                        alt={'Logo'}
                        style={{width: '142px', marginRight: 16}}
          />
        </LogoWrapper>

        {
          width > 991 ?
            <>
            <Navbar navItems={navItems} />
            <LocaleControl/>
            </> :
            <MenuBtn onClick={() => setMenuOpen(!menuIsOpen)} isOpen={menuIsOpen} />
        }
      </HeaderContainerBox>

      {
        width <= 991 && menuIsOpen &&
        <ContainerBox>
          <Navbar
            navItems={navItems}
            onClick={() => setMenuOpen(false)} />
          <LocaleControl/>

        </ContainerBox>
      }

    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: ${theme.colors.black};
  border-bottom: 1px solid ${theme.colors.neonBlue};
  box-shadow: 0 1px 6px 0 ${theme.colors.neonBlue};
`

const HeaderContainerBox = styled(ContainerBox)`
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 52px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;

  ${theme.media.xl} {
    font-size: 16px;
  }
`


export default Header


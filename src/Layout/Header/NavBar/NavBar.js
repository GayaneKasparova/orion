import React from "react";
import SubMenu from "./SubMenu/SubMenu";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import styled from "styled-components";
import {theme} from "../../../styles/theme";

const NavBar = ({navItems, className, onClick}) => {

    return (
        <StyledNav className={className}>
            <ul>
                {
                  navItems.map(navItem => (
                        <li key={navItem.id}>
                          {navItem.url ? <AnchorLink to={navItem.url} title={navItem.title} onClick={onClick}/> : <span>{navItem.title}</span>}

                            {
                              navItem.treeChildren.length > 0 && <SubMenu subMenuItems={navItem.treeChildren}/>
                            }
                        </li>
                    ))
                }
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
  min-height: 0;
  transition: min-height .3s ease .5s;

  &.mobileMenu {
    min-height: calc(100vh - 90px);

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      li {
        padding-left: 0;

        &::after {
          left: 0;
        }

        a {
          padding: 16px 0 8px;
        }
      }
    }
  }

  li {
    position: relative;
    display: inline-block;
    padding: 0 8px;
    list-style: none;

    &::after {
      content: "";

      position: absolute;
      left: 16px;
      width: 0;
      bottom: 2px;
      height: 3px;
      background-image: linear-gradient(45deg, ${theme.colors.neonBlue}, ${theme.colors.purple});
      border-radius: 1px;
      transition: width .35s ease;
      ${theme.media.lg} {
        bottom: 16px;
      }
      }

    &:hover {
      &::after {
        width: calc(100% - 32px);
      }
    }
  }

  a {
    display: inline-block;
    padding: 32px 8px;
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.medium};
    line-height: 27px;
    font-style: ${theme.fontWeights.regular};
    letter-spacing: 1.3px;
    text-decoration: none;
    ${theme.media.xl} {
      font-size: ${theme.fontSizes.l};
    }
  }
`;

export default NavBar